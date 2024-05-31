import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/auth/auth.actions';
import { authUser } from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit, OnDestroy{
  
  //datosLocales = localStorage.getItem('Usuario')
  loginForm: FormGroup;
  
  authUserSubscription?:Subscription;
          
  userRegister = this.formBuilder.group({
            // name: this.formBuilder.control(''),
            firstName: ['',[Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')] ],
            phone:['' ,[Validators.required]],
            email: this.formBuilder.control('', [
              // Validators.email,
              Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
              Validators.required,
            ]),
            contra: ['',  [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$')]],
            role:['ADMIN' || 'USER']
          });
          
          get emailControl() {
            return this.userRegister.get('email');
          }
          get nameControl(){
            return this.userRegister.get('firstName')
          }
          get phoneControl(){
            return this.userRegister.get('phone')
          }
          get contrasenaControl() {
            return this.userRegister.get('contra');
          }
          
    authUser$: Observable<any | null>;
    constructor(private authService: AuthService, private router:Router, private formBuilder: FormBuilder, private store: Store){
      this.loginForm = this.formBuilder.group({
        email:['',[Validators.required]],
        contra: ['',[Validators.required]],
      })      
      this.authUser$ = this.authService.authUser$
          }
          ngOnInit(): void {
            this.authUserSubscription = this.store.select(authUser).subscribe({
              next: (user) => {
                if(user) this.router.navigate(['dashboard', 'home']);
              }
            })
          }
          
          ngOnDestroy(): void {
           this.authUserSubscription?.unsubscribe()
          }

    onSubmit(): void {
      if(this.userRegister.status === 'VALID'){
      
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario creado correctamente",
        showConfirmButton: false,
        timer: 1500
      });
      let datosUsuarioCreado = this.userRegister.value
      if((datosUsuarioCreado.email == 'josuebaez61+profesor@gmail.com') || (datosUsuarioCreado.email == 'kirito92@gmail.com')){
        datosUsuarioCreado.role = 'ADMIN'
        localStorage.setItem('Usuario', JSON.stringify(datosUsuarioCreado))
        localStorage.setItem('accessToken','92fb232f-2a5c-4d44-a581-5abc156087b6');
        this.router.navigate(['dashboard', 'home'])
      } else{
        datosUsuarioCreado.role = 'USER'
        localStorage.setItem('Usuario', JSON.stringify(datosUsuarioCreado))
        localStorage.setItem('accessToken','92fb232f-2a5c-4d44-a581-5abc156087b6');
        this.router.navigate(['dashboard', 'home'])
      }
      
      }}

    register(): void{
        this.onSubmit()
    }
    login(){
      if(this.loginForm.invalid) {
        this.loginForm.markAllAsTouched();
      } else {
      //this.authService.login(this.loginForm.getRawValue())}
      this.store.dispatch(authActions.login({payload: this.loginForm.getRawValue()}))
   }
}
}