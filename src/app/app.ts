import { ViewportScroller } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent, SvgIconComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App
{
  protected readonly title = signal('portafolio-jorge');
  private viewportScroller = inject(ViewportScroller);

  public gotoAnchor(anchorName: string): void
  {
    this.viewportScroller.setOffset([0, 67]);
    this.viewportScroller.scrollToAnchor(anchorName);
  }
}
