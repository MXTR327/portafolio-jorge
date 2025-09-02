import { Component, input } from '@angular/core';
import { TimeRange } from '@portafolio-front/interfaces/time-range.interface';

@Component({
  imports: [],
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
})
export class TimelineItemComponent
{
  readonly index = input.required<number>();
  readonly isLast = input.required<boolean>();
  readonly isRight = input.required<boolean>();
  readonly timeRange = input.required<TimeRange>();
}
