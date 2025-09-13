/* eslint-disable perfectionist/sort-objects */
import { Routes } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PortafolioFrontLayoutComponent } from './layouts/portafolio-front-layout/portafolio-front-layout.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

export const portafolioFrontRoutes: Routes = [
  {
    component: PortafolioFrontLayoutComponent,
    path: '',
    children: [
      {
        component: LandingPageComponent,
        path: '',
      },
      {
        component: ProjectPageComponent,
        path: 'project/:id',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default portafolioFrontRoutes;
