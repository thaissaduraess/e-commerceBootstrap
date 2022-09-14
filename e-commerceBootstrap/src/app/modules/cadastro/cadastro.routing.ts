import { CadastroComponent } from './cadastro.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: '', component: CadastroComponent
  },
];


export const CadastroRoutes = RouterModule.forChild(routes);
