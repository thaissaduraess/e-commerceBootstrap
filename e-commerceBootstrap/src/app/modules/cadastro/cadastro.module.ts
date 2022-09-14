import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutes } from './cadastro.routing';



@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    SharedModule,
    CadastroRoutes
  ]
})
export class CadastroModule { }
