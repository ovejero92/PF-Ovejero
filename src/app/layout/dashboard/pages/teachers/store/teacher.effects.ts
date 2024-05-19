import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { TeacherActions } from './teacher.actions';
import { TeachersService } from '../teachers.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';


@Injectable()
export class TeacherEffects {

  loadTeachers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TeacherActions.loadTeachers),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.teachersService.getTeachers().pipe(
          map(data => TeacherActions.loadTeachersSuccess({ data })),
          catchError(error => of(TeacherActions.loadTeachersFailure({ error }))))
      )
    );
  });

  createTeachers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TeacherActions.createTeachers),
      concatMap((action) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.teachersService.createTeacher(action.payload).pipe(
          map(data => TeacherActions.createTeachersSuccess({ data })),
          catchError(error => of(TeacherActions.createTeachersFailure({ error }))))
      )
    );
  });

  deleteTeachersById$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TeacherActions.deleteTeachersById),
      concatMap((action) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.teachersService.deleteTeacher(action.id).pipe(
          map(data => TeacherActions.deleteTeachersByIdSuccess({ data })),
          catchError(error => of(TeacherActions.deleteTeachersByIdFailure({ error }))))
      )
    );
  });

  onError$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TeacherActions.createTeachersFailure, TeacherActions.deleteTeachersByIdFailure, TeacherActions.loadTeachersFailure),
      tap((action) => {
        if(action.error instanceof HttpErrorResponse){
          Swal.fire({
            icon:'error',
            text:action.error['message']
          })
        }
      })
    )
  },{dispatch:false})


  constructor(private actions$: Actions,private teachersService: TeachersService) {}
}
