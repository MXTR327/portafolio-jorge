import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ITimeRange } from '@sobre-nosotros/interfaces/time-range.interface';

@Component({
  selector: 'app-timeline-item',
  imports: [],
  templateUrl: './timeline-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineItemComponent
{
  readonly index = input.required<number>();
  readonly isLast = input.required<boolean>();
  readonly isRight = input.required<boolean>();
  readonly timeRange = input.required<ITimeRange>();
}
