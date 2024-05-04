import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  
  //datosLocales = localStorage.getItem('Usuario')
  loginForm: FormGroup;
  

          
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
    constructor(private authService: AuthService, private router:Router, private formBuilder: FormBuilder){
      this.loginForm = this.formBuilder.group({
        email:[''],
        contra: [''],
      })      
      this.authUser$ = this.authService.authUser$
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
      localStorage.setItem('Usuario', JSON.stringify(datosUsuarioCreado))
      localStorage.setItem('accessToken','fdskfdsjkmngfunudsijfdsioufjsdoifdsyhfds');
      this.router.navigate(['dashboard', 'home'])

      }
    }

    register(){
        this.onSubmit()
    }
    login(){
      if(this.loginForm.invalid) {
        this.loginForm.markAllAsTouched();
      } else {
      this.authService.login(this.loginForm.getRawValue())}
   }
}
