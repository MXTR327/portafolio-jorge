import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import * as AOS from 'aos';

@Component({
  imports: [RouterOutlet, FooterComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit
{
  protected readonly title = signal('portafolio-jorge');

  ngOnInit(): void
  {
    AOS.init({
      mirror: true,
      once: true,
    });
  }
}
