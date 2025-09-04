import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';

export interface LinkPage
{
  anchorId: string;
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class LinksRouteService
{
  get linksPages(): readonly LinkPage[]
  {
    return this._linksPages;
  }

  private readonly _linkPage = (id: string, anchorId: string, name: string): LinkPage => ({
    anchorId,
    id,
    name,
  });

  private readonly _linksPages: LinkPage[] = [
    this._linkPage('home', 'inicio', 'Inicio'),
    this._linkPage('about-us', 'sobre-nosotros', 'Sobre Nosotros'),
    this._linkPage('services', 'servicios', 'Servicios'),
    this._linkPage('projects', 'proyectos', 'Proyectos'),
    this._linkPage('contact', 'contacto', 'Contacténos'),
  ];

  private readonly _viewportScroller = inject(ViewportScroller);

  public readonly getLink = (id: string): LinkPage | undefined =>
    this._linksPages.find((link) => link.id === id);

  public readonly goToAnchorById = (id: string) =>
    this._viewportScroller.scrollToAnchor(this.getLink(id)?.anchorId ?? 'home');
}
