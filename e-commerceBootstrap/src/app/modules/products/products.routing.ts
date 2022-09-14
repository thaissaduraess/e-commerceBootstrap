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
        path:'',component: ListProductsComponent,
      },
      {
        path: 'categoria',  // child route path
        component: CategoriaProductComponent,  // child route component that the router renders
      },
      {
        path: 'details/:id',  // child route path
        component: DetailsProductComponent,  // child route component that the router renders
      }
    ],
  },
];

export const ProductsRoutes = RouterModule.forChild(routes);
