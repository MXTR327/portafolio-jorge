import {
  Directive,
  AfterViewInit,
  ContentChildren,
  ElementRef,
  QueryList,
  inject,
} from '@angular/core';
import { ActiveSectionService } from '@shared/services/active-section.service';

@Directive({
  selector: '[ScrollTracker]',
})
export class ScrollTrackerDirective implements AfterViewInit
{
  private readonly _activeSectionService = inject(ActiveSectionService);

  // busca dentro del host los elementos con #observeSection
  @ContentChildren('observeSection', { read: ElementRef })
  sections!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void
  {
    if (!this.sections || this.sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) =>
      {
        for (const entry of entries)
        {
          const id = (entry.target as HTMLElement).id;
          if (!id) continue;

          this._activeSectionService.setVisible(id, entry.isIntersecting);

          if (entry.isIntersecting && entry.intersectionRatio >= 0.5)
          {
            this._activeSectionService.setActive(id);
          }
        }
      },
      { root: null, threshold: [0.1, 0.5] },
    );

    this.sections.forEach((section) =>
    {
      observer.observe(section.nativeElement);
    });
  }
}
