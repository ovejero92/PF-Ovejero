import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:() => import('./pages/home/home.module').then((m)=>m.HomeModule),
  },
  {
    path:'carts',
    loadChildren:() => import('./pages/carts/carts.module').then((m)=>m.CartsModule),
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintboardRoutingModule { }
