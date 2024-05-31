import { Component, OnInit } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import Swal from 'sweetalert2';
import { UserService } from './users.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit{
  authUser$: Observable<IUser | null>;

  usu = localStorage.getItem('Usuario');
  datosU = JSON.parse(`${this.usu}`);

  
  
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'role',
    'createdAt',
    'actions',
  ];
  displayedColumnsUser: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'role',
    'createdAt',

  ];

  loading = false;
  users: IUser[] = [];

  constructor(private matDialog: MatDialog, private userService: UserService, private authService: AuthService) {
  this.authUser$ = this.authService.authUser$
  console.log(this.datosU)
  }
  ngOnInit(): void {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users
      },
      error: (err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `¡Error al cargar los datos del a base de datos! ${err}`,
          footer: '<a routingLink="auth">Volver a ingresar</a>'
        });
      },
      complete:() => {
        console.log('... BD usuarios conectada ✔️');
        this.loading = false
      },
    });
  }

  openDialog(editingUser?: IUser): void {
    this.matDialog
      .open(UserDialogComponent, {
        data: editingUser,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editingUser) {
              // ACTUALIZAR EL USUARIO EN EL ARRAY
              this.users = this.users.map((u) =>

                u.id === editingUser.id ? { ...u, ...result } : u
              );
            } else {
              // LOGICA DE CREAR EL USUARIO
              result.createdAt = new Date();
              this.userService.createUser(result).subscribe({
                next: (usuarioCreado) =>{
                  this.users = [...this.users,usuarioCreado]
                }
              })

              //this.users = [...this.users, result];
            }
          }
        },
      });
  }

  onDeleteUser(id: string): void {
    if (confirm('Esta seguro?')) {
      this.userService.deleteUser(id).subscribe({
        next: (userEliminado) => {
          this.users = [...this.users]
        }
      })
      this.users = this.users.filter((u) => u.id != `${id}`);
    }
  }
}