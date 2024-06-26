import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'home',
  loadChildren:()=> import('./pages/home/home.module').then((m)=>m.HomeModule),
},
{
  path:'monthly',
  loadChildren:()=> import('./pages/monthly/monthly.module').then((m)=>m.MonthlyModule),
},
{
  path:'bestSelling',
  loadChildren:() => import('./pages/best-selling/best-selling.module').then((m)=>m.BestSellingModule),
},
{
  path:'trends',
  loadChildren:() => import('./pages/trends/trends.module').then((m)=>m.TrendsModule),
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
export class StatisticsRoutingModule { }
