import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CategoriaProductComponent } from './categoria-product/categoria-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent ,
    children: [
      {
        path: 'lista',
        component: ListProductsComponent,
      },
      {
        path: 'categoria',
        component: CategoriaProductComponent,
      },
      {
        path: 'details/:id',
        component: DetailsProductComponent,
      },
      {
        path: 'carrinho',
        component: CarrinhoComponent,
      }
    ],
  },
];

export const ProductsRoutes = RouterModule.forChild(routes);
