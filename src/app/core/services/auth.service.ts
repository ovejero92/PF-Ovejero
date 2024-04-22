import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUser } from "../../layout/dashboard/pages/users/models";


@Injectable({providedIn: 'root'})
export class AuthService {
    private _authUser$ = new BehaviorSubject<any | null>(null);
    public authUser$ = this._authUser$.asObservable();
    private DatosStorage = localStorage.getItem('Usuario')
    private DatosUsuario = JSON.parse(`${this.DatosStorage}`)

    login(): void {
        this._authUser$.next(
         {id:1,
        createdAt: new Date(),
        email:  `${this.DatosUsuario.email}`,
        firstName: `${this.DatosUsuario.firstName}`,
        lastName: `${this.DatosUsuario.lastName}`,
        role: 'ADMIN', }
        
            //   {id:1,
            // createdAt: new Date(),
            // email: 'email@mail.com',
            // firstName: 'Naruto',
            // lastName: 'son',
            // role: 'ADMIN', }
       );
    }
    logout(): void{
        this._authUser$.next(null);
    }
}