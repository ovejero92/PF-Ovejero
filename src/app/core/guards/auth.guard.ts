import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const token = localStorage.getItem('accessToken');

  if (!token) return router.createUrlTree(['auth']);

  return authService.verifyToken().pipe(
    take(1),
    map((isValid) => isValid ? true : router.createUrlTree(['auth']))
  );
};
// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   console.log('authGuard');

//    const router = inject(Router)
//    const authService = inject(AuthService);

//    const isAuth = authService.verifyToken()

//    return isAuth || router.createUrlTree(['auth'])
//   //  return authService.authUser$.pipe(
//   //   map((authUser) => {
//   //     if(!authUser){return router.createUrlTree(['auth'])}
//   //     return true;
//   //   })
//   //  );

// };
