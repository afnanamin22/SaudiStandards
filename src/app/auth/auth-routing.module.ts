import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuccessfulRegisterationComponent } from './successful-registeration/successful-registeration.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {path:'',component:AuthComponent,children:[
    {path:'register/:id',component:RegisterComponent},
      {path:'success',component:SuccessfulRegisterationComponent},
      {path:'login',component:LoginComponent},
  ]}
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
