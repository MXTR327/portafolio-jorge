import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { AboutUsTimelineComponent } from "@sobre-nosotros/components/about-us-timeline/about-us-timeline.component";

@Component({
  selector: 'app-about-us-page',
  imports: [AboutUsTimelineComponent],
  templateUrl: './about-us-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsPageComponent
{
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);
}
