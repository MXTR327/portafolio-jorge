import { Injectable } from '@angular/core';
import { ILinkPage } from '@shared/interfaces/link-page.interface';

@Injectable({
  providedIn: 'root',
})
export class LinksRouteService
{
  get pages(): ILinkPage[]
  {
    return this._pages;
  }
  private readonly _page = (id: string, name: string): ILinkPage => ({
    id,
    name,
  });
  private readonly _pages: ILinkPage[] = [
    this._page('home', 'Inicio'),
    this._page('about-us', 'Sobre Nosotros'),
    this._page('services', 'Servicios'),
    this._page('projects', 'Proyectos'),
    this._page('contact', 'Contacténos'),
  ];
}
