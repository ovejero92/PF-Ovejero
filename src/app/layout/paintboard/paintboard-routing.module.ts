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
    path:'backgorunds',
    loadChildren:() => import('./pages/backgorunds/backgorunds.module').then((m)=>m.BackgorundsModule),
  },
  {
    path:'modifier',
    loadChildren:()=> import('./pages/modifier/modifier.module').then((m)=>m.ModifierModule),
  },
  {
    path:'chatbot',
    loadChildren:() => import('./pages/chatbot/chatbot.module').then((m)=>m.ChatbotModule),
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
