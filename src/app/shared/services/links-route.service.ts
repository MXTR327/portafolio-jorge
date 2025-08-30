import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';

export interface LinkPage
{
  name: string;
  href: string;
}

@Injectable({
  providedIn: 'root',
})
export class LinksRouteService
{
  private readonly _viewportScroller = inject(ViewportScroller);

  private readonly _linksPages: LinkPage[] = [
    {
      name: 'Home',
      href: 'home',
    },
    {
      name: 'About Us',
      href: 'about-us',
    },
    {
      name: 'Services',
      href: 'services',
    },
    {
      name: 'Projects',
      href: 'projects',
    },
    {
      name: 'Contact Us',
      href: 'contact',
    },
  ];

  get linksPages(): ReadonlyArray<LinkPage>
  {
    return this._linksPages;
  }

  public gotoAnchor(anchorName: string): void
  {
    this._viewportScroller.setOffset([0, 85]);
    this._viewportScroller.scrollToAnchor(anchorName);
  }

  public getByHref(href: string): LinkPage | undefined
  {
    return this._linksPages.find((link) => link.href === href);
  }

  public getByName(name: string): LinkPage | undefined
  {
    return this._linksPages.find((link) => link.name === name);
  }
}
