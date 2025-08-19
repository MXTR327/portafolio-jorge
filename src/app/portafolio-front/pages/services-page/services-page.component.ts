import { Component } from '@angular/core';
import { ServiceCardComponent } from "src/app/services/components/service-card/service-card.component";

@Component( {
  selector: 'app-services-page',
  imports: [ServiceCardComponent],
  templateUrl: './services-page.component.html',
} )
export class ServicesPageComponent
{

}
