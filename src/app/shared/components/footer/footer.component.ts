import { Component, inject } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ViewportScroller } from '@angular/common';
import { ContactService } from '@shared/services/contact.service';

@Component({
  selector: 'front-footer',
  imports: [SvgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent
{
  year: Number = new Date().getFullYear();
  contactService = inject(ContactService);
  private viewportScroller = inject(ViewportScroller);
  contactLinks = this.contactService.socialLinks;

  icoMaxSrc = 'assets/icons/icon-logo-max.svg';
  icoMaxStyle = { height: '40px', fill: 'white' };

  public gotoAnchor(anchorName: string): void
  {
    this.viewportScroller.setOffset([0, 67]);
    this.viewportScroller.scrollToAnchor(anchorName);
  }
}
