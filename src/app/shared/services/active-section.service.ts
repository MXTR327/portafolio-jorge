import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveSectionService
{
  set section(id: string)
  {
    this._activeSection.set(id);
  }
  get section(): string
  {
    return this._activeSection();
  }

  private readonly _activeSection = signal<string>('home');
}
