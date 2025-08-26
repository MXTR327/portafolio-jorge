import { Component, inject } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ContactService, SocialLink } from '@shared/services/contact.service';
import { linkPage, LinksService } from '@shared/services/links.service';

@Component({
  selector: 'front-footer',
  imports: [SvgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent
{
  year: Number = new Date().getFullYear();

  private contactService: ContactService = inject(ContactService);
  contactLinks: SocialLink[] = this.contactService.socialLinks;
  lugar: string = `${this.contactService.country}, ${this.contactService.city}`;
  calle: string = `${this.contactService.street}, #${this.contactService.streetNumber}`;
  phone: string = this.contactService.phone;

  linksService: LinksService = inject(LinksService);
  linksPages: linkPage[] = this.linksService.linksPages;

  icoMaxSrc: string = 'assets/icons/icon-logo-max.svg';
  icoMaxStyle: Record<string, string> = { height: '40px', fill: 'white' };
}
