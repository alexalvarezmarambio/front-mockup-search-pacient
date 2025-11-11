import { Directive, HostBinding, HostListener, ElementRef, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({ selector: '[mask-rut]'})
export class MaskRutDirective {
  // @HostBinding('autocomplete') public autocomplete;

  constructor(private element: ElementRef,
    @Optional() @Self() private control?: NgControl) {
    // this.autocomplete = 'off';
  }

  @HostListener('input', ['$event'])
  onModelChange(event: any) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event: any) {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event: any, backspace: any) {
    const initalValue = this.element.nativeElement.value;

    let newVal = initalValue.replace(/[^0-9k]/gi, '');
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 4) {
      newVal = newVal.replace(/^(\d{0,1})(\d{0,3})/, '$1.$2');
    } else if (newVal.length <= 5) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,3})/, '$1.$2');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '$1.$2');
    } else if (newVal.length <= 7) {
      newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})/, '$1.$2.$3');
    } else if (newVal.length <= 8) {
      newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,1})/, '$1.$2.$3-$4');
    } else {
      newVal = newVal.substring(0, 9);
      newVal = newVal.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,1})/, '$1.$2.$3-$4');
    }

    if (this.control && this.control.control) {
      this.control.control.setValue(newVal);
    }
  }
}
