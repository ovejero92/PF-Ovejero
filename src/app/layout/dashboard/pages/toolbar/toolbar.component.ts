import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  modalVisible = false


  userForm = this.formBuilder.group({
    // name: this.formBuilder.control(''),
    name: ['',[Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')] ],
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
    return this.userForm.get('name')
  }
  get lastNameControl(){
    return this.userForm.get('lastName')
  }
  get contrasenaControl() {
    return this.userForm.get('contra');
  }

  constructor(private formBuilder: FormBuilder) {}
  onSubmit(): void {
    if(this.userForm.status === 'VALID'){
    this.modalVisible = false
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
    }
   
  }
}
