import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';

export interface ILinkPage
{
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class LinksRouteService
{
  get linksPages(): readonly ILinkPage[]
  {
    return this._linksPages;
  }

  private readonly _linkPage = (id: string, name: string): ILinkPage => ({
    id,
    name,
  });

  private readonly _linksPages: ILinkPage[] = [
    this._linkPage('home', 'Inicio'),
    this._linkPage('about-us', 'Sobre Nosotros'),
    this._linkPage('services', 'Servicios'),
    this._linkPage('projects', 'Proyectos'),
    this._linkPage('contact', 'Contacténos'),
  ];

  private readonly _viewportScroller = inject(ViewportScroller);

  readonly getLink = (id: string): ILinkPage | undefined =>
    this._linksPages.find((link) => link.id === id);

  readonly goToAnchorById = (id: string) =>
  {
    this._viewportScroller.scrollToAnchor(id);
  };
}
