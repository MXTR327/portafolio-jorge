import { Routes } from '@angular/router';
import { PortafolioFrontLayoutComponent } from './layouts/portafolio-front-layout/portafolio-front-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

export const portafolioFrontRoutes: Routes = [
  {
    path: '',
    component: PortafolioFrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'projects',
        component: ProjectsPageComponent,
      },
      {
        path: 'services',
        component: ServicesPageComponent,
      },
      // {
      //   path: "**",
      //   component: NotFoundPageComponent
      // }
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default portafolioFrontRoutes;
