import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';

export interface linkPage
{
  name: string;
  href: string;
}
@Injectable({
  providedIn: 'root',
})
export class LinksService
{
  private viewportScroller: ViewportScroller = inject(ViewportScroller);
  public gotoAnchor(anchorName: string): void
  {
    this.viewportScroller.setOffset([0, 67]);
    this.viewportScroller.scrollToAnchor(anchorName);
  }

  get linksPages(): linkPage[]
  {
    return [
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
  }
}
