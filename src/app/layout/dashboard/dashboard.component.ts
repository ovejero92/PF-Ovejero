import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { IUser } from './pages/users/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  showFiller = false;
  mostra = false;
  authUser$: Observable<IUser | null>;
  yaRegistrado = localStorage.getItem('Usuario')
  constructor(private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  } 
  login():void {
   this.authService.login()
  }
  logout(): void {
    this.authService.logout()
  }
  mostarDatos(): void {
    this.mostra = !this.mostra
  }
}
