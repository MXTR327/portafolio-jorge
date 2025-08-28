import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveSectionService
{
  private _activeSection = signal<string>('home');
  private _visibleSections = signal<Set<string>>(new Set());

  get activeSection(): string
  {
    return this._activeSection();
  }

  get visibleSections(): Set<string>
  {
    return this._visibleSections();
  }

  setActive(id: string)
  {
    this._activeSection.set(id);
  }

  setVisible(id: string, isVisible: boolean)
  {
    const newSet = new Set(this._visibleSections());
    if (isVisible)
    {
      newSet.add(id);
    }
    else
    {
      newSet.delete(id);
    }
    this._visibleSections.set(newSet);
  }
}
