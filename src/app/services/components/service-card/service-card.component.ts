import { Component, input } from '@angular/core';
import { Service } from '../../interfaces/service.interface';

@Component({
  selector: 'service-card',
  imports: [],
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent
{
  service = input.required<Service>();
}
