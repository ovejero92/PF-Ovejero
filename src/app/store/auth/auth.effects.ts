import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../core/services/auth.service";
import { authActions } from "./auth.actions";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      switchMap(({ payload }) =>
        this.authService.login(payload).pipe(
          map((user) => authActions.loginSuccess({ user })),
          catchError((err) => of(authActions.loginFailure({ error: err.message })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginSuccess),
      tap(() => this.router.navigate(['dashboard', 'home']))
    ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginFailure),
      tap(({ error }) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: error === 'Usuario no encontrado'
            ? 'No existe una cuenta con ese email.'
            : 'La contraseña es incorrecta.',
        });
      })
    ),
    { dispatch: false }
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.register),
      switchMap(({ payload }) =>
        this.authService.register(payload).pipe(
          map((user) => authActions.registerSuccess({ user })),
          catchError((err) => of(authActions.registerFailure({ error: err.message })))
        )
      )
    )
  );

  registerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.registerSuccess),
      tap(() => {
        Swal.fire({ position: 'top-end', icon: 'success', title: 'Usuario creado', showConfirmButton: false, timer: 1500 });
        this.router.navigate(['dashboard', 'home']);
      })
    ),
    { dispatch: false }
  );

  verifyToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.verifyToken),
      switchMap(() =>
        this.authService.verifyToken().pipe(
          map((isValid) => {
            if (isValid) {
              const user = (this.authService as any)['_authUser$'].getValue();
              return authActions.verifyTokenSuccess({ user });
            }
            return authActions.verifyTokenFailure();
          }),
          catchError(() => of(authActions.verifyTokenFailure()))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.logout),
      tap(() => this.authService.logout())
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}