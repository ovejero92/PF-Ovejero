import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
//import { AuthComponent } from './layout/auth/auth.component';
import { authGuard } from './core/guards/auth.guard';
import { PaintboardComponent } from './layout/paintboard/paintboard.component';
import { StatisticsComponent } from './layout/statistics/statistics.component';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: DashboardComponent,
    loadChildren: () => import('./layout/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./layout/auth/auth.module').then((m) => m.AuthModule),
  },
  {
   path: 'paintboard',
   component:PaintboardComponent,
   loadChildren: () => import('./layout/paintboard/paintboard.module').then((m) => m.PaintboardModule),
  },
  {
   path:'statistics',
   component:StatisticsComponent,
   loadChildren: () => import('./layout/statistics/statistics.module').then((m)=>m.StatisticsModule),
  },
  {
    path:'**',
    redirectTo: '/auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
