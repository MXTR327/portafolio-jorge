import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-project-slider',
  imports: [SvgIconComponent],
  templateUrl: './project-slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSliderComponent
{
  private readonly _iconsProjectsPath: string = 'assets/icons/proyectos';
  readonly iconBackPath: string = `${this._iconsProjectsPath}/icon-back.svg`;
  readonly iconNextPath: string = `${this._iconsProjectsPath}/icon-next.svg`;
  readonly iconStyle: Record<string, string> = { height: '25px' };

  readonly imgList = input.required<string[]>();
}
