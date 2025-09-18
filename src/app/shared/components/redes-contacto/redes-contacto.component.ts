import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ISocialLink } from '@shared/interfaces/social-link.interface';
import { LinksContactService } from '@shared/services/links-contact.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-redes-contacto',
  imports: [SvgIconComponent],
  templateUrl: './redes-contacto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedesContactoComponent
{
  readonly animationDelay = input<number>(0);
  readonly animationOnce = input<boolean>(false);
  private readonly _linksContactService = inject(LinksContactService);
  readonly socialLinks: readonly ISocialLink[] = this._linksContactService.socialLinks;
}
