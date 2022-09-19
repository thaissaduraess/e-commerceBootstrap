import { CadastroComponent } from './cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CadastroModule { }
