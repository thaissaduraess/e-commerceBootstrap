import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardProductComponent } from '../components/card-product/card-product.component';
import { NavProductComponent } from '../components/nav-product/nav-product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  declarations: [
    NavProductComponent,
    CardProductComponent
  ],

  exports: [ CommonModule, FormsModule, ReactiveFormsModule, NavProductComponent, CardProductComponent ]
})
export class SharedModule {  }
