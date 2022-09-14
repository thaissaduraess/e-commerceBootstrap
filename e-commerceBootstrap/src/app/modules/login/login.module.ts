import { FormLoginComponent } from './form-login/form-login.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutes,
    SharedModule
  ],
  declarations: [LoginComponent, FormLoginComponent]
})
export class LoginModule { }
