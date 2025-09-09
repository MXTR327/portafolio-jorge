import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-form-input',
  imports: [SvgIconComponent, ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormInputComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent
{
  readonly fieldError = input.required<string | undefined>();

  readonly iconErrorPath: string = 'assets/icons/forms/icon-error.svg';
  readonly iconPath = input.required<string>();
  readonly id = input.required<string>();
  readonly isValidField = input.required<boolean | null>();
  readonly placeholder = input.required<string>();
  readonly type = input.required<'input' | 'textarea'>();

  value = '';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (value: string): void =>
  {
    //
  };

  onTouched = (): void =>
  {
    //
  };

  // eslint-disable-next-line @typescript-eslint/naming-convention
  registerOnChange(function_: (value: string) => void): void
  {
    this.onChange = function_;
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  registerOnTouched(function_: () => void): void
  {
    this.onTouched = function_;
  }
  writeValue(value: string): void
  {
    this.value = value;
  }
}
