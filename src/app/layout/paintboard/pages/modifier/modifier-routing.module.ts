import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifierComponent } from './modifier.component';

const routes: Routes = [
  {
    path:'',
    component:ModifierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifierRoutingModule { }
