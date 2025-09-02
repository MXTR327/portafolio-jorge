import { inject, Injectable } from '@angular/core';

import { IconManagerService } from './icon-manager.service';

export interface SocialLink
{
  icon: string;
  name: string;
  path: string;
  style?: Record<string, string>;
}

@Injectable({
  providedIn: 'root',
})
export class LinksContactService
{
  readonly city: string = 'Lima';
  readonly country: string = 'Perú';
  readonly phone: string = '992901012';
  readonly street: string = 'Santa María';
  readonly streetNumber: string = '15135';
  
  get socialLinks(): SocialLink[]
  {
    return [
      {
        icon: this._getPathIcon('logo-facebook'),
        name: 'facebook',
        path: `https://www.facebook.com/${this._facebook}`,
        style: { height: '20px' },
      },
      {
        icon: this._getPathIcon('logo-gmail'),
        name: 'gmail',
        path: `https://mail.google.com/mail/?view=cm&to=${this._email}&su=Consulta&body=${this.message}`,
        style: { height: '19px' },
      },
      {
        icon: this._getPathIcon('logo-whatsapp'),
        name: 'whatsapp',
        path: `https://api.whatsapp.com/send/?phone=${this.phone}&text=${this.message}`,
        style: { height: '19px' },
      },
    ];
  }

  private readonly _email: string = 'ramsua.jorlui@gmail.com';
  private readonly _facebook: string = 'jorje.ramirez.71619';

  private readonly _iconManagerService = inject(IconManagerService);

  private get message(): string
  {
    return encodeURIComponent(
      'Hola mi nombre es (nombre),\n' +
        'Vivo en (lugar),\n' +
        'Me gustaría que conversemos para hablar sobre un trabajo de ...',
    );
  }

  private _getPathIcon(name: string): string
  {
    return this._iconManagerService.getByName(name)?.path ?? '';
  }
}
