/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
} from '@angular/core';
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
  disabled = false;
  readonly fieldError = input.required<string | undefined>();
  readonly iconErrorPath: string = 'assets/icons/forms/icon-error.svg';
  readonly iconPath = input.required<string>();
  readonly id = input.required<string>();
  readonly isValidField = input.required<boolean | null>();
  readonly placeholder = input.required<string>();

  readonly type = input.required<'input' | 'textarea'>();
  value = '';

  private readonly _cdr = inject(ChangeDetectorRef);

  handleInput(value: string): void
  {
    this.value = value;
    this.onChange(value);
    this._cdr.markForCheck();
  }
  // callbacks
  onChange: (value: string) => void = () =>
  {};

  onTouched: () => void = () =>
  {};

  registerOnChange(function_: (value: string) => void): void
  {
    this.onChange = function_;
  }

  registerOnTouched(function_: () => void): void
  {
    this.onTouched = function_;
  }

  setDisabledState(isDisabled: boolean): void
  {
    this.disabled = isDisabled;
    this._cdr.markForCheck();
  }

  writeValue(value: string): void
  {
    this.value = value;
    this._cdr.markForCheck();
  }
}
