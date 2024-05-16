import { createReducer, on } from "@ngrx/store";
import { IUser } from "../../layout/dashboard/pages/users/models";
import { authActions } from "./auth.actions";
import Swal from "sweetalert2";

export interface AuthState {
    authUser: null | IUser;
}

const inicialState: AuthState = {
    authUser: null,
}
let DatosStorage = localStorage.getItem('Usuario')
let DatosUsuario = JSON.parse(`${DatosStorage}`)


const MOCK_AUTH_USER:IUser = {
            id:"1",
            createdAt: new Date(),
            email:DatosUsuario ? DatosUsuario.email : '',
            firstName: DatosUsuario ? DatosUsuario.firstName : '',
            phone: DatosUsuario ? DatosUsuario.phone : '',
            contra: DatosUsuario ? DatosUsuario.contra : '',
            role: 'ADMIN',
};

export const authFeatureName = 'auth'

export const authReducer = createReducer(inicialState,
    on(authActions.login,(state, action) => {

        if(action.payload.email !== DatosUsuario.email || action.payload.contra !== DatosUsuario.contra){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            return state;
        } else {
        //   this._authUser$.next({
        //     id:1,
        //     createdAt: new Date(),
        //     email:`${this.DatosUsuario.email}`,
        //     firstName: `${this.DatosUsuario.firstName}`,
        //     phone: this.DatosUsuario.phone,
        //     contra: `${this.DatosUsuario.contra}`,
        //     role: 'ADMIN',
        // })
        localStorage.setItem('accessToken','fdskfdsjkmngfunudsijfdsioufjsdoifdsyhfds');
           // this.router.navigate(['dashboard','home']);
        };
        return {
            authUser: MOCK_AUTH_USER
        }
    }),

    on(authActions.logout,() => {

        localStorage.removeItem('accessToken')
        return inicialState;
    })
);