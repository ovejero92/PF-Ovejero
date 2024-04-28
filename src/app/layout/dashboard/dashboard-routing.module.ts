import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m)=> m.HomeModule),
  },
  {
    path:'users',
    loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path:'teacher',
    loadChildren: () => import('./pages/clase-10-rxjs-2/clase-10-rxjs-2.module').then((m)=>m.Clase10Rxjs2Module),
  },
  {
    path:'products',
    loadChildren:()=> import('./pages/products/products.module').then((m)=> m.ProductsModule),
  },
  {
    path: 'sales',
    loadChildren: () => import('./pages/sales/sales.module').then((m) => m.SalesModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
