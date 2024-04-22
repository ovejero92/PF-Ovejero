import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../../../core/services/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  modalVisible = false
  mostra = true
  logueo = document.querySelector('.logueo')

  userForm = this.formBuilder.group({
    // name: this.formBuilder.control(''),
    firstName: ['',[Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')] ],
    lastName:['' ,[Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
    email: this.formBuilder.control('', [
      // Validators.email,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
      Validators.required,
    ]),
    contra: ['',  [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$')]],
  });

  get emailControl() {
    return this.userForm.get('email');
  }
  get nameControl(){
    return this.userForm.get('firstName')
  }
  get lastNameControl(){
    return this.userForm.get('lastName')
  }
  get contrasenaControl() {
    return this.userForm.get('contra');
  }
  
  authUser$: Observable<any | null>;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
   this.authUser$ = this.authService.authUser$
  }
  login(): void {
    this.authService.login()
  }
  onSubmit(): void {
    if(this.userForm.status === 'VALID'){
    
    this.modalVisible = false
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Usuario creado correctamente",
      showConfirmButton: false,
      timer: 1500
    });
    let datosUsuarioCreado = this.userForm.value
    localStorage.setItem('Usuario', JSON.stringify(datosUsuarioCreado))
    this.mostra = !this.mostra
    }
  }
}
