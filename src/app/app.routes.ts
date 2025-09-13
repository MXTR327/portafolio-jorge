import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    loadChildren: () => import('./portafolio-front/portafolio-front.routes'),
    path: '',
  },
];
