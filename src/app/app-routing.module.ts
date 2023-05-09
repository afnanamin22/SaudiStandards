import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'main'},
  {path:'main',component:MainpageComponent},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then((x)=>x.AuthModule)},
  {path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then((x)=>x.DashboardModule)},
  {path:'website',loadChildren:()=>import('./website/website.module').then((x)=>x.WebsiteModule)},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
