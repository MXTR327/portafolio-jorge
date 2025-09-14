import { Injectable } from '@angular/core';
import { IEmailjsTemplateInterface } from '@contactenos/interfaces/emailjs-template.interface';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';

emailjs.init({ publicKey: environment.emailjsKey });

@Injectable({
  providedIn: 'root',
})
export class EmailService
{
  readonly sendEmail = (formData: IEmailjsTemplateInterface) =>
    emailjs.send(
      environment.serviceId,
      environment.templateId,
      formData as unknown as Record<string, unknown>,
    );
}
