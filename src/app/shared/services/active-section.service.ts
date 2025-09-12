import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveSectionService
{
  readonly activeSection = signal<string>('home');
}
