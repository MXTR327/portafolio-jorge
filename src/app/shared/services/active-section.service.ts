import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveSectionService
{
  public set section(id: string)
  {
    this._activeSection.set(id);
  }
  public get section(): string
  {
    return this._activeSection();
  }

  private _activeSection = signal<string>('home');
}
