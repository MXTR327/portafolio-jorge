import { Component, computed, inject } from '@angular/core';
import { ProjectCardComponent } from '@proyectos/components/project-card/project-card.component';
import { ActiveSectionService } from '@shared/services/active-section.service';

@Component({
  selector: 'projects-page',
  imports: [ProjectCardComponent],
  templateUrl: './projects-page.component.html',
})
export class ProjectsPageComponent
{
  // Servicios (inyectados)
  private readonly _activeSectionService = inject(ActiveSectionService);

  // Reactive/computed states
  readonly isSectionActive = computed(
    () => this._activeSectionService.activeSection === 'projects',
  );
  
  // Configuracion estatica y constantes
  private readonly _imgPath: string = 'assets/images';
  readonly projects = [
    {
      image: `${this._imgPath}/escalera.png`,
      title: 'Escalera con mayolica asdasd asdas dsad asd',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
      date: 'Julio 16, 2025',
    },
    {
      image: `${this._imgPath}/lavadero.png`,
      title: 'Lavadero enchapado',
      description:
        'Lorem ipsum dolor siasdadasdasdasdasdsa sadad sadsasda sad asd asd asd asd asd sad a dasdt amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
      date: 'Agosto 5, 2025',
    },
    {
      image: `${this._imgPath}/lavadero2.png`,
      title: 'Lavadero enchapado negro',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
      date: 'Septiembre 1, 2025',
    },
  ];
}
