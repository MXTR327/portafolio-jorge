import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  signal,
  ViewChildren,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit
{
  protected readonly title = signal('portafolio-jorge');
  @ViewChildren('observeSection') sectionRefs!: QueryList<ElementRef<HTMLElement>>;

  ngOnInit(): void
  {
    AOS.init({
      once: false,
      mirror: true,
    });
  }

  sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
  ];

  activeSection = 'home';

  ngAfterViewInit()
  {
    const observer = new IntersectionObserver(
      (entries) =>
      {
        entries.forEach((entry) =>
        {
          if (entry.isIntersecting)
          {
            this.activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.6 },
    ); // 60% visible

    this.sectionRefs.forEach((ref) => observer.observe(ref.nativeElement));
  }

  scrollTo(id: string)
  {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
