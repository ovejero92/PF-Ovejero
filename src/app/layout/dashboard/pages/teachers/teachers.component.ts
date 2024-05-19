import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TeachersService } from './teachers.service';
import { selectIsLoading, selectTeachers, selectTeachersError } from './store/teacher.selectors';
import { ITeacher } from './models';
import { TeacherActions } from './store/teacher.actions';
import { TeachersDialogComponent } from './components/teacher-dialog/teacher-dialog.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss'
})
export class TeachersComponent implements OnInit{
 displayedColumns: string[] = ['id', 'firstName','email','tecnologi','createdAt','actions']
 isLoading$: Observable<boolean>
 teachers: ITeacher[] = []
 teachers$:Observable<ITeacher[]>
 error$:Observable<unknown>


 constructor(private store:Store, private teachersService: TeachersService, private matDialog: MatDialog){
  this.isLoading$ = this.store.select(selectIsLoading)
  this.teachers$ = this.store.select(selectTeachers)
  this.error$ = this.store.select(selectTeachersError)
 }
  ngOnInit(): void {
   this.store.dispatch(
    TeacherActions.loadTeachers()
   )
  }

  createTeacherMock(){
    this.store.dispatch(TeacherActions.createTeachers({payload: {
      firstName:"TeacherTest",
      lastName:'TeacherTest',
      phone:111111111,
      email: "TeacherTest@test.test",
      role: "TEACHER",
      tecnologi: "TecnologiTest",
      createdAt: new Date(),
    }}))
  }
  // fin de create
  openDialog(editingTeacher?: ITeacher): void {
    this.matDialog.open(TeachersDialogComponent, {
      data: editingTeacher,
    }).afterClosed().subscribe({
      next: (result) => {
        if(result) {
          if(editingTeacher) {
            this.teachers = this.teachers.map((u) => 
            u.id === editingTeacher.id ? {...u, ...result} : u);
          } else {
            result.createdAt = new Date();
            this.store.dispatch(TeacherActions.createTeachers({payload: result}))
          }
        }
      }
    })
    }
    // fin de Dialog
  onDeleteTeachers(id:string): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(TeacherActions.deleteTeachersById({id}))
        Swal.fire({
          title: "¡Eliminado!",
          text: `El producto ${result.value.firstName} fue eliminado.`,
          icon: "success"
        });
      }
    });
  }
}
