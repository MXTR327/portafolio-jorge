import { Injectable } from '@angular/core';

export interface IInfoPerson
{
  city: string;
  country: string;
  email: string;
  facebook: string;
  phone: string;
  street: string;
  streetNumber: string;
}

export interface ISocialLink
{
  href: string;
  iconPath: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class LinksContactService
{
  get infoPerson(): IInfoPerson
  {
    return this._infoPerson;
  }
  get socialLinks(): readonly ISocialLink[]
  {
    return this._socialLinks;
  }

  private readonly _iconsPath: string = 'assets/icons';

  private readonly _infoPerson: IInfoPerson = {
    city: 'Lima',
    country: 'Perú',
    email: 'ramsua.jorlui@gmail.com',
    facebook: 'jorje.ramirez.71619',
    phone: '992901012',
    street: 'Santa María',
    streetNumber: '15135',
  };

  private readonly _message = (): string =>
    encodeURIComponent(
      'Hola mi nombre es (nombre),\n' +
        'Vivo en (lugar),\n' +
        'Me gustaría que conversemos para hablar sobre un trabajo de ...',
    );

  private readonly _socialLink = (name: string, href: string, iconPath: string): ISocialLink => ({
    href,
    iconPath,
    name,
  });

  private readonly _socialLinks: ISocialLink[] = [
    this._socialLink(
      'facebook',
      `https://www.facebook.com/${this._infoPerson.facebook}`,
      `${this._iconsPath}/shared/icon-logo-facebook.svg`,
    ),
    this._socialLink(
      'gmail',
      `https://mail.google.com/mail/?view=cm&to=${this._infoPerson.email}&su=Consulta&body=${this._message()}`,
      `${this._iconsPath}/shared/icon-logo-gmail.svg`,
    ),
    this._socialLink(
      'whatsapp',
      `https://api.whatsapp.com/send/?phone=${this._infoPerson.phone}&text=${this._message()}`,
      `${this._iconsPath}/shared/icon-logo-whatsapp.svg`,
    ),
  ];
}
