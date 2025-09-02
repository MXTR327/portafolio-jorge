import { Component } from '@angular/core';
import { ProjectCardComponent } from '@proyectos/components/project-card/project-card.component';

@Component({
  imports: [ProjectCardComponent],
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
})
export class ProjectsPageComponent
{
  private readonly _imgPath: string = 'assets/images';

  readonly projects = [
    {
      date: 'Julio 16, 2025',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
      image: `${this._imgPath}/escalera.png`,
      title: 'Escalera con mayolica asdasd asdas dsad asd',
    },
    {
      date: 'Agosto 5, 2025',
      description:
        'Lorem ipsum dolor siasdadasdasdasdasdsa sadad sadsasda sad asd asd asd asd asd sad a dasdt amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
      image: `${this._imgPath}/lavadero.png`,
      title: 'Lavadero enchapado',
    },
    {
      date: 'Septiembre 1, 2025',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
      image: `${this._imgPath}/lavadero2.png`,
      title: 'Lavadero enchapado negro',
    },
  ];
}
