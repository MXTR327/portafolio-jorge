import { Injectable } from '@angular/core';

export interface SocialLink
{
  name: string;
  url: string;
  icon: string;
  style?: { [klass: string]: any };
}

@Injectable({
  providedIn: 'root',
})
export class ContactService
{
  private readonly icoUrl: string = 'assets/icons';

  country: string = 'Perú';
  city: string = 'Lima';
  street: string = 'Santa María';
  streetNumber: string = '15135';

  phone: string = '992901012';
  private readonly email: string = 'ramsua.jorlui@gmail.com';
  private readonly facebook: string = 'jorje.ramirez.71619';

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
        url: `https://www.facebook.com/${this.facebook}`,
        icon: `${this.icoUrl}/icon-logo-facebook.svg`,
        style: { height: '20px' },
      },
      {
        name: 'gmail',
        url: `https://mail.google.com/mail/?view=cm&to=${this.email}&su=Consulta&body=${this.message}`,
        icon: `${this.icoUrl}/icon-logo-gmail.svg`,
        style: { height: '20px' },
      },
      {
        name: 'whatsapp',
        url: `https://api.whatsapp.com/send/?phone=${this.phone}&text=${this.message}`,
        icon: `${this.icoUrl}/icon-logo-whatsapp.svg`,
        style: { height: '20px' },
      },
    ];
  }
}
