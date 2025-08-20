import { Component } from '@angular/core';
import { ServiceCardComponent } from 'src/app/services/components/service-card/service-card.component';

@Component({
  selector: 'app-services-page',
  imports: [ServiceCardComponent],
  templateUrl: './services-page.component.html',
})
export class ServicesPageComponent
{
  ruta = 'assets/images';
  services = [
    {
      image: `${this.ruta}/escalera.png`,
      service: 'Construccion de viviendas',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
    },
    {
      image: `${this.ruta}/lavadero.png`,
      service: 'Construccion de mas',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
    },
    {
      image: `${this.ruta}/lavadero2.png`,
      service: 'Lavadero enchapado negro',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
    },
  ];
}
