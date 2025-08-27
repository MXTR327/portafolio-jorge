import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveSectionService
{
  private _active = signal<string>('home');
  readonly active = this._active.asReadonly();

  setActive(id: string)
  {
    this._active.set(id);
  }
}
