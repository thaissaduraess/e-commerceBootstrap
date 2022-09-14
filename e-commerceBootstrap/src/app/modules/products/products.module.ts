import { CategoriaProductComponent } from './categoria-product/categoria-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsRoutes } from './products.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutes
  ],
  declarations: [ProductsComponent, ListProductsComponent, DetailsProductComponent, CategoriaProductComponent]
})
export class ProductsModule { }
