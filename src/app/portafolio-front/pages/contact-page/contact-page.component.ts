import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LinksContactService, SocialLink } from '@shared/services/links-contact.service';
import { FormUtilities } from 'src/app/utils/form-utilities';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent
{
  private readonly _linksContactService = inject(LinksContactService);
  readonly calle: string = `${this._linksContactService.street}, #${this._linksContactService.streetNumber}`;
  readonly formUtils = FormUtilities;
  readonly lugar: string = `${this._linksContactService.country}, ${this._linksContactService.city}`;

  private readonly _fb = inject( FormBuilder );
  myForm: FormGroup = this._fb.group({
    email: [ '',
      [ Validators.required, Validators.pattern( FormUtilities.emailPattern ) ],
      [ FormUtilities.checkingServerResponse ]
    ],
    name: [ '',
      [ Validators.required, Validators.pattern( FormUtilities.namePattern ) ],
    ],
    password: [ '', [ Validators.required, Validators.minLength( 6 ) ] ],
    password2: [ '', Validators.required ],
    username: [ '',
      [
        Validators.required, Validators.minLength( 6 ),
        Validators.pattern( FormUtilities.notOnlySpacesPattern ),
        FormUtilities.notStrider,
      ],
    ],
  },
  );
  readonly phone: string = this._linksContactService.phone;
  readonly socialLinks: SocialLink[] = this._linksContactService.socialLinks; 
  
  onSubmit()
  {
    this.myForm.markAllAsTouched();
    console.log( this.myForm.value );
  }
}
