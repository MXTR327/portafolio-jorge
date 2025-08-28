import { Injectable } from '@angular/core';

export interface Icon
{
  name: string;
  path: string;
  style?: { [klass: string]: any };
}

@Injectable({
  providedIn: 'root',
})
export class IconManagerService
{
  private readonly _icoUrl: string = '/assets/icons';
  private readonly _icons: Icon[] = [
    {
      name: 'arrowup',
      path: `${this._icoUrl}/icon-arrowup.svg`,
      style: { height: '20px', fill: 'white' },
    },
    {
      name: 'call',
      path: `${this._icoUrl}/icon-call.svg`,
      style: { height: '20px', fill: 'white' },
    },
    {
      name: 'inbox',
      path: `${this._icoUrl}/icon-inbox.svg`,
      style: { height: '20px', fill: 'white' },
    },
    {
      name: 'logo-facebook',
      path: `${this._icoUrl}/icon-logo-facebook.svg`,
      style: { height: '20px', fill: 'white' },
    },
    {
      name: 'logo-gmail',
      path: `${this._icoUrl}/icon-logo-gmail.svg`,
      style: { height: '20px', fill: 'white' },
    },
    {
      name: 'logo-max',
      path: `${this._icoUrl}/icon-logo-max.svg`,
      style: { height: '20px', fill: 'white' },
    },
    {
      name: 'logo-whatsapp',
      path: `${this._icoUrl}/icon-logo-whatsapp.svg`,
      style: { height: '20px', fill: 'white' },
    },
    {
      name: 'menu-close',
      path: `${this._icoUrl}/icon-menu-close.svg`,
      style: { height: '20px', fill: 'white' },
    },
    {
      name: 'menu-hamburger',
      path: `${this._icoUrl}/icon-menu-hamburger.svg`,
      style: { height: '20px', fill: 'white' },
    },
    {
      name: 'paper-plane',
      path: `${this._icoUrl}/icon-paper-plane.svg`,
      style: { height: '20px', fill: 'white' },
    },
    {
      name: 'ubication',
      path: `${this._icoUrl}/icon-ubication.svg`,
      style: { height: '20px', fill: 'white' },
    },
    {
      name: 'worker',
      path: `${this._icoUrl}/icon-worker.svg`,
      style: { height: '20px', fill: 'white' },
    },
  ];

  get icons(): ReadonlyArray<Icon>
  {
    return this._icons;
  }

  public getByName(name: string): Icon | undefined
  {
    return this._icons.find((icon) => icon.name === name);
  }
}
