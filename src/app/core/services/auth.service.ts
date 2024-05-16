import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LoginData } from "../../layout/auth/models";
import Swal from 'sweetalert2';
import { Router } from "@angular/router";
import { IUser } from "../../layout/dashboard/pages/users/models";

@Injectable({providedIn: 'root'})
export class AuthService {
    private _authUser$ = new BehaviorSubject<any | null>(null);
    public authUser$ = this._authUser$.asObservable();
    private DatosStorage = localStorage.getItem('Usuario')
    private DatosUsuario = JSON.parse(`${this.DatosStorage}`)


    constructor(private router: Router) {}


    register(): void {
        this._authUser$.next({
            id:1,
            createdAt: new Date(),
            email:`${this.DatosUsuario.email}`,
            firstName: `${this.DatosUsuario.firstName}`,
            phone: this.DatosUsuario.phone,
            contra: `${this.DatosUsuario.contra}`,
            role: 'ADMIN',
        });
    }
//     login(data: LoginData): void {
//     if(data.email !== this.DatosUsuario.email || data.contra !== this.DatosUsuario.contra){
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Something went wrong!",
//             footer: '<a href="#">Why do I have this issue?</a>'
//           });
//     } else {
//       this._authUser$.next({
//         id:1,
//         createdAt: new Date(),
//         email:`${this.DatosUsuario.email}`,
//         firstName: `${this.DatosUsuario.firstName}`,
//         phone: this.DatosUsuario.phone,
//         contra: `${this.DatosUsuario.contra}`,
//         role: 'ADMIN',
//     })
//         localStorage.setItem('accessToken','fdskfdsjkmngfunudsijfdsioufjsdoifdsyhfds');
//         this.router.navigate(['dashboard','home']);
//     };
// }
verifyToken(): boolean{
    const token = localStorage.getItem('accessToken');
    if(token){
    this._authUser$.next({
        id:1,
        createdAt: new Date(),
        email: this.DatosUsuario ? this.DatosUsuario.email : '',
        firstName: this.DatosUsuario ? this.DatosUsuario.firstName : '',
        phone: this.DatosUsuario ? this.DatosUsuario.phone : '',
        contra: this.DatosUsuario ? this.DatosUsuario.contra : '',
        role: 'ADMIN',
    })
    return true;
    } else {
        return false;
    }
}
    
logout(): void{
        this._authUser$.next(null);
        localStorage.removeItem('accessToken');
    }
}