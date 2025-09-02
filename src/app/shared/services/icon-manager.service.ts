import { Injectable } from '@angular/core';

export interface Icon
{
  name: string;
  path: string;
  style?: Record<string, string>;
}

@Injectable({
  providedIn: 'root',
})
export class IconManagerService
{
  get icons(): readonly Icon[]
  {
    return this._icons;
  }
  private readonly _icoUrl: string = '/assets/icons';

  private readonly _icons: Icon[] = [
    {
      name: 'arrowup',
      path: `${this._icoUrl}/icon-arrowup.svg`,
      style: { fill: 'white', height: '20px' },
    },
    {
      name: 'call',
      path: `${this._icoUrl}/icon-call.svg`,
      style: { fill: 'white', height: '20px' },
    },
    {
      name: 'inbox',
      path: `${this._icoUrl}/icon-inbox.svg`,
      style: { fill: 'white', height: '20px' },
    },
    {
      name: 'logo-facebook',
      path: `${this._icoUrl}/icon-logo-facebook.svg`,
      style: { fill: 'white', height: '20px' },
    },
    {
      name: 'logo-gmail',
      path: `${this._icoUrl}/icon-logo-gmail.svg`,
      style: { fill: 'white', height: '20px' },
    },
    {
      name: 'logo-max',
      path: `${this._icoUrl}/icon-logo-max.svg`,
      style: { fill: 'white', height: '20px' },
    },
    {
      name: 'logo-whatsapp',
      path: `${this._icoUrl}/icon-logo-whatsapp.svg`,
      style: { fill: 'white', height: '20px' },
    },
    {
      name: 'menu-close',
      path: `${this._icoUrl}/icon-menu-close.svg`,
      style: { fill: 'white', height: '20px' },
    },
    {
      name: 'menu-hamburger',
      path: `${this._icoUrl}/icon-menu-hamburger.svg`,
      style: { fill: 'white', height: '20px' },
    },
    {
      name: 'paper-plane',
      path: `${this._icoUrl}/icon-paper-plane.svg`,
      style: { fill: 'white', height: '20px' },
    },
    {
      name: 'ubication',
      path: `${this._icoUrl}/icon-ubication.svg`,
      style: { fill: 'white', height: '20px' },
    },
    {
      name: 'worker',
      path: `${this._icoUrl}/icon-worker.svg`,
      style: { fill: 'white', height: '20px' },
    },
  ];

  public getByName(name: string): Icon | undefined
  {
    return this._icons.find((icon) => icon.name === name);
  }
}
