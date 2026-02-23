import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { IUser } from "../../layout/dashboard/pages/users/models";
import { LoginData } from "../../layout/auth/models";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _authUser$ = new BehaviorSubject<IUser | null>(null);
  public authUser$ = this._authUser$.asObservable();

  private get apiUrl(): string {
    return environment.baseAPIURL;
  }

  constructor(private http: HttpClient, private router: Router) {}

  login(data: LoginData): Observable<IUser> {
    return this.http.get<IUser[]>(
      `${this.apiUrl}/users?email=${data.email}`
    ).pipe(
      map((users) => {
        if (!users.length) throw new Error('Usuario no encontrado');
        const user = users[0];
        if (user.contra !== data.contra) throw new Error('Contraseña incorrecta');
        localStorage.setItem('accessToken', user.id);
        this._authUser$.next(user);
        return user;
      })
    );
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('accessToken');
    if (!token) return of(false);

    return this.http.get<IUser>(`${this.apiUrl}/users/${token}`).pipe(
      map((user) => {
        this._authUser$.next(user);
        return true as boolean;
      }),
      catchError(() => {
        localStorage.removeItem('accessToken');
        return of(false);
      })
    );
  }

  register(userData: Omit<IUser, 'id' | 'createdAt'>): Observable<IUser> {
    const newUser = {
      ...userData,
      role: 'USER', // El rol siempre lo asigna el servidor
      createdAt: new Date(),
    };
    return this.http.post<IUser>(`${this.apiUrl}/users`, newUser).pipe(
      map((user) => {
        localStorage.setItem('accessToken', user.id);
        this._authUser$.next(user);
        return user;
      })
    );
  }

  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('accessToken');
    this.router.navigate(['auth']);
  }
}
// import { Injectable } from "@angular/core";
// import { BehaviorSubject } from "rxjs";
// import { LoginData } from "../../layout/auth/models";
// import Swal from 'sweetalert2';
// import { Router } from "@angular/router";
// import { IUser } from "../../layout/dashboard/pages/users/models";

// @Injectable({providedIn: 'root'})
// export class AuthService {
//     private _authUser$ = new BehaviorSubject<any | null>(null);
//     public authUser$ = this._authUser$.asObservable();
//     private DatosStorage = localStorage.getItem('Usuario')
//     private DatosUsuario = JSON.parse(`${this.DatosStorage}`)


//     constructor(private router: Router) {}


//     register(): void {
//         this._authUser$.next({
//             id:1,
//             createdAt: new Date(),
//             email:`${this.DatosUsuario.email}`,
//             firstName: `${this.DatosUsuario.firstName}`,
//             phone: this.DatosUsuario.phone,
//             contra: `${this.DatosUsuario.contra}`,
//             role: `${this.DatosUsuario.role}`,
//         });
//     }
// //     login(data: LoginData): void {
// //     if(data.email !== this.DatosUsuario.email || data.contra !== this.DatosUsuario.contra){
// //         Swal.fire({
// //             icon: "error",
// //             title: "Oops...",
// //             text: "Something went wrong!",
// //             footer: '<a href="#">Why do I have this issue?</a>'
// //           });
// //     } else {
// //       this._authUser$.next({
// //         id:1,
// //         createdAt: new Date(),
// //         email:`${this.DatosUsuario.email}`,
// //         firstName: `${this.DatosUsuario.firstName}`,
// //         phone: this.DatosUsuario.phone,
// //         contra: `${this.DatosUsuario.contra}`,
// //         role: 'ADMIN',
// //     })
// //         localStorage.setItem('accessToken','fdskfdsjkmngfunudsijfdsioufjsdoifdsyhfds');
// //         this.router.navigate(['dashboard','home']);
// //     };
// // }
// verifyToken(): boolean{
//     const token = localStorage.getItem('accessToken');
//     if(token){
//     this._authUser$.next({
//         id:1,
//         createdAt: new Date(),
//         email: this.DatosUsuario ? this.DatosUsuario.email : '',
//         firstName: this.DatosUsuario ? this.DatosUsuario.firstName : '',
//         phone: this.DatosUsuario ? this.DatosUsuario.phone : '',
//         contra: this.DatosUsuario ? this.DatosUsuario.contra : '',
//         role: this.DatosUsuario ? this.DatosUsuario.role: '' ,
//     })
//     return true;
//     } else {
//         return false;
//     }
// }
    
// logout(): void{
//         this._authUser$.next(null);
//         localStorage.removeItem('accessToken');
//     }
// }