import { Component, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  imports: [SvgIconComponent, ReactiveFormsModule],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
    },
  ],
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
})
export class FormInputComponent
{
  fieldError = input.required<string | undefined>();

  readonly iconErrorPath: string = 'assets/icons/forms/icon-error.svg';
  iconPath = input.required<string>();
  id = input.required<string>();
  isValidField = input.required<boolean | null>();
  placeholder = input.required<string>();
  type = input.required<'input' | 'textarea'>();

  value = '';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (value: string) =>
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    {};

  onTouched = (): void =>
  {
    //
  };

  registerOnChange(function_: (value: string) => void): void
  {
    this.onChange = function_;
  }
  registerOnTouched(function_: () => void): void
  {
    this.onTouched = function_;
  }
  writeValue(value: string): void
  {
    this.value = value ?? '';
  }
}
