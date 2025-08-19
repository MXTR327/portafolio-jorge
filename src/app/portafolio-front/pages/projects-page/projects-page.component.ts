import { Component } from '@angular/core';
import { ProjectCardComponent } from 'src/app/projects/components/project-card/project-card.component';

@Component( {
  selector: 'projects-page',
  imports: [ ProjectCardComponent ],
  templateUrl: './projects-page.component.html',
} )
export class ProjectsPageComponent
{
  ruta = 'assets/images';
  images = [
    {
      image: `${this.ruta}/escalera.png`,
      title: 'Escalera con mayolica',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
      date: 'Julio 16, 2025',
    },
    {
      image: `${this.ruta}/lavadero.png`,
      title: 'Lavadero enchapado',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
      date: 'Agosto 5, 2025',
    },
    {
      image: `${this.ruta}/lavadero2.png`,
      title: 'Lavadero enchapado negro',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
      date: 'Septiembre 1, 2025',
    },
  ];
}
