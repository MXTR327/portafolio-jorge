import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import * as AOS from 'aos';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class App implements OnInit
{
  private readonly _router = inject(Router);

  readonly isLoading = toSignal(
    this._router.events.pipe(map(() => !!this._router.getCurrentNavigation())),
    { initialValue: false },
  );

  protected readonly title = signal('portafolio-jorge');

  ngOnInit(): void
  {
    this._router.events.subscribe((event: Event) =>
    {
      if (event instanceof NavigationEnd)
        // eslint-disable-next-line unicorn/prefer-global-this
        setTimeout(() => window.HSStaticMethods.autoInit(), 50);
    });

    AOS.init({
      mirror: true,
      once: true,
    });
  }
}
