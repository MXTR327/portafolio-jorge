import { Routes } from '@angular/router';
import { PortafolioFrontLayoutComponent } from './portafolio-front/layouts/portafolio-front-layout/portafolio-front-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PortafolioFrontLayoutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
