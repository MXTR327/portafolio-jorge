import { Component, inject } from '@angular/core';
import { ContactService, SocialLink } from '@shared/services/contact.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'contact-page',
  imports: [SvgIconComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent
{
  private contactService = inject(ContactService);
  contactLinks: SocialLink[] = this.contactService.socialLinks;

  lugar: string = `${this.contactService.country}, ${this.contactService.city}`;
  calle: string = `${this.contactService.street}, #${this.contactService.streetNumber}`;
  phone: string = this.contactService.phone;
}
