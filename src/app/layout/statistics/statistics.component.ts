import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IUser } from '../dashboard/pages/users/models';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit{
  mostra: boolean= false;
  authUser$: Observable<IUser | null>;
  authUserSinPipe: IUser | null = null;
  authUserSubscription?: Subscription;

  constructor( private authService:AuthService,private router:Router){
    this.authUser$ = this.authService.authUser$
  }
  
  
  ngOnInit(): void {
    this.authUserSubscription = this.authService.authUser$.subscribe({
      next:(user)=>{
        this.authUserSinPipe = user;
      },
    });
  }

  mostarDatos(): void {this.mostra = !this.mostra}
  logout(): void {
    this.authService.logout()
    this.router.navigate(['auth'])
    localStorage.removeItem('Usuario')
  }
  dashboard():void {this.router.navigate(['dashboard/home'])}
  paintboard(): void{this.router.navigate(['paintboard'])}
  isMobile(): boolean {
    return window.innerWidth <= 280;
  }

}
