import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Clase10Rxjs2Component } from './clase-10-rxjs-2.component';


const routes: Routes = [
  {
    path: '',
    component: Clase10Rxjs2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
