import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { FormBuilder, Validators } from '@angular/forms';
//import Swal from 'sweetalert2';
//import { AuthService } from '../../../../core/services/auth.service';
//import { Observable } from 'rxjs';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  constructor(private router:Router){}

  paintboard():void{
  this.router.navigate(['paintboard'])
  }
  statistics(): void{
    this.router.navigate(['statistics'])
  }
}
