import { Component, inject } from '@angular/core';
import { ContactService } from '@shared/services/contact.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'contact-page',
  imports: [SvgIconComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent
{
  contactService = inject(ContactService);
  contactLinks = this.contactService.socialLinks;
}
