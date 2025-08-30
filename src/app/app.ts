import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { ActiveSectionService } from '@shared/services/active-section.service';
import * as AOS from 'aos';
import { BackToTopComponent } from '@shared/components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent, BackToTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit
{
  protected readonly title = signal('portafolio-jorge');

  showButton = false;

  ngOnInit(): void
  {
    AOS.init({
      once: false,
      mirror: true,
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll()
  {
    this.showButton = window.scrollY > 300;
  }
}
