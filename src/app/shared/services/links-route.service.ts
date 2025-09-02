import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';

export interface LinkPage
{
  href: string;
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

  private readonly _linksPages: LinkPage[] = [
    {
      href: 'home',
      name: 'Home',
    },
    {
      href: 'about-us',
      name: 'About Us',
    },
    {
      href: 'services',
      name: 'Services',
    },
    {
      href: 'projects',
      name: 'Projects',
    },
    {
      href: 'contact',
      name: 'Contact Us',
    },
  ];

  private readonly _viewportScroller = inject(ViewportScroller);

  public getByHref(href: string): LinkPage | undefined
  {
    return this._linksPages.find((link) => link.href === href);
  }

  public getByName(name: string): LinkPage | undefined
  {
    return this._linksPages.find((link) => link.name === name);
  }

  public gotoAnchor(anchorName: string): void
  {
    this._viewportScroller.setOffset([0, 85]);
    this._viewportScroller.scrollToAnchor(anchorName);
  }
}
