import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-back-to-top',
  imports: [SvgIconComponent],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '(window:scroll)': 'onScroll()',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '[class.visible]': 'isScrolled()',
  },
})
export class BackToTopComponent
{
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);

  readonly isOnFooter = signal<boolean>(false);
  readonly isScrolled = signal<boolean>(false);

  private readonly _footerEl = document.querySelector('app-front-footer');

  private readonly _linksRouteService = inject(LinksRouteService);

  goToAnchorById(anchorId: string): void
  {
    this._linksRouteService.goToAnchorById(anchorId);
  }

  onScroll(): void
  {
    this.isScrolled.set(window.scrollY > 100);

    const FOOTER_TOP = this._footerEl?.getBoundingClientRect().top ?? 0;
    const THIS_HEIGHT = this.elementRef.nativeElement.firstElementChild?.clientHeight ?? 0;

    this.isOnFooter.set(window.innerHeight > FOOTER_TOP + THIS_HEIGHT);
  }
}
