import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgorundsComponent } from './backgorunds.component';

const routes: Routes = [
  {
    path:'',
    component:BackgorundsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackgorundsRoutingModule { }
