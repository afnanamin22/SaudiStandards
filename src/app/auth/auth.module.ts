import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuccessfulRegisterationComponent } from './successful-registeration/successful-registeration.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ConfirmEmailComponent,
    ResetPasswordComponent,
    SuccessfulRegisterationComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AuthModule { }
