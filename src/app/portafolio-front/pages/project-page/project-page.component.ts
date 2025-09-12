import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-project-page',
  imports: [],
  templateUrl: './project-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPageComponent
{
  activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
  projectId: string = this.activatedRoute.snapshot.params['id'] as string;

  // eslint-disable-next-line @angular-eslint/no-experimental
  projectResource = rxResource({
    params: () => ({ id: this.projectId }),

    stream: ({ params }) =>
    {
      console.log(params);
      return of(params.id);
    },
  });
}
