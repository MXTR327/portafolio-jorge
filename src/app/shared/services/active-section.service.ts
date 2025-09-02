import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveSectionService
{
  get activeSection(): string
  {
    return this._activeSection();
  }
  private _activeSection = signal<string>('home');

  setActive(id: string)
  {
    this._activeSection.set(id);
  }
}
