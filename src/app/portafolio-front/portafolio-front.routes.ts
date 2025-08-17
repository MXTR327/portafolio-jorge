import { Routes } from '@angular/router';
import { PortafolioFrontLayoutComponent } from './layouts/portafolio-front-layout/portafolio-front-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const portafolioFrontRoutes: Routes = [
  {
    path: "",
    component: PortafolioFrontLayoutComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
      },
      // {
      //   path: "gender/:gender",
      //   component: GenderPageComponent,
      // },
      // {
      //   path: "product/:idSlug",
      //   component: ProductPageComponent
      // },
      // {
      //   path: "**",
      //   component: NotFoundPageComponent
      // }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  },
]

export default portafolioFrontRoutes;
