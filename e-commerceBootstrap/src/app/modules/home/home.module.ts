import { CardProductComponent } from './card-product/card-product.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { NavProjectComponent } from './nav-project/nav-project.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    SharedModule
  ],
  declarations: [HomeComponent, NavProjectComponent, CardProductComponent]
})
export class HomeModule { }
