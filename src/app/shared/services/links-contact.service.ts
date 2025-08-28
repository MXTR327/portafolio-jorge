import { inject, Injectable } from '@angular/core';
import { IconManagerService } from './icon-manager.service';

export interface SocialLink
{
  name: string;
  path: string;
  icon: string;
  style?: { [klass: string]: any };
}

@Injectable({
  providedIn: 'root',
})
export class LinksContactService
{
  // Servicios (inyectados)
  private readonly _iconManagerService = inject(IconManagerService);

  // Atributos
  readonly country: string = 'Perú';
  readonly city: string = 'Lima';
  readonly street: string = 'Santa María';
  readonly streetNumber: string = '15135';
  readonly phone: string = '992901012';

  private readonly _email: string = 'ramsua.jorlui@gmail.com';
  private readonly _facebook: string = 'jorje.ramirez.71619';

  // Métodos
  private get message(): string
  {
    return encodeURIComponent(
      'Hola mi nombre es (nombre),\n' +
        'Vivo en (lugar),\n' +
        'Me gustaría que conversemos para hablar sobre un trabajo de ...',
    );
  }

  get socialLinks(): SocialLink[]
  {
    return [
      {
        name: 'facebook',
        path: `https://www.facebook.com/${this._facebook}`,
        icon: this._getPathIcon('logo-facebook'),
        style: { height: '20px' },
      },
      {
        name: 'gmail',
        path: `https://mail.google.com/mail/?view=cm&to=${this._email}&su=Consulta&body=${this.message}`,
        icon: this._getPathIcon('logo-gmail'),
        style: { height: '19px' },
      },
      {
        name: 'whatsapp',
        path: `https://api.whatsapp.com/send/?phone=${this.phone}&text=${this.message}`,
        icon: this._getPathIcon('logo-whatsapp'),
        style: { height: '19px' },
      },
    ];
  }

  private _getPathIcon(name: string): string
  {
    return this._iconManagerService.getByName(name)?.path ?? '';
  }
}
