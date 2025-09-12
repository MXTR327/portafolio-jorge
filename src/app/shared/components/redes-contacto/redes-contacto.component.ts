import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  private readonly _linksContactService = inject(LinksContactService);
  readonly socialLinks: readonly ISocialLink[] = this._linksContactService.socialLinks;
}
