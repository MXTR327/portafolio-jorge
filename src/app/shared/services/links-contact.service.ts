import { Injectable } from '@angular/core';

export interface SocialLink
{
  iconPath: string;
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
        iconPath: `${this._iconsPath}/icon-logo-facebook.svg`,
        name: 'facebook',
        path: `https://www.facebook.com/${this._facebook}`,
        style: { height: '20px' },
      },
      {
        iconPath: `${this._iconsPath}/icon-logo-gmail.svg`,
        name: 'gmail',
        path: `https://mail.google.com/mail/?view=cm&to=${this._email}&su=Consulta&body=${this.message}`,
        style: { height: '19px' },
      },
      {
        iconPath: `${this._iconsPath}/icon-logo-whatsapp.svg`,
        name: 'whatsapp',
        path: `https://api.whatsapp.com/send/?phone=${this.phone}&text=${this.message}`,
        style: { height: '19px' },
      },
    ];
  }

  private readonly _email: string = 'ramsua.jorlui@gmail.com'; 
  private readonly _facebook: string = 'jorje.ramirez.71619';
  private readonly _iconsPath: string = 'assets/icons/shared';

  private get message(): string
  {
    return encodeURIComponent(
      'Hola mi nombre es (nombre),\n' +
        'Vivo en (lugar),\n' +
        'Me gustaría que conversemos para hablar sobre un trabajo de ...',
    );
  }
}
