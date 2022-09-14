import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { CategoriaProductComponent } from './categoria-product/categoria-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsComponent } from './products.component';
import { ProductsRoutes } from './products.routing';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutes,
    SharedModule
  ],
  declarations: [ProductsComponent, ListProductsComponent, DetailsProductComponent, CategoriaProductComponent]
})
export class ProductsModule { }
