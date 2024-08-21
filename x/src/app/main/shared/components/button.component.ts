import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      *ngIf="label"
      [disabled]="disabled"
      [ngClass]="{
        'w-full': fullWidth,
        'w-fit': !fullWidth,
        'bg-twitter-blue text-white border-twitter-blue': secondary,
        'bg-twitter-blue text-white border-twitter-blue opacity-40': !secondary,
        'text-xl px-5 py-3': large,
        'text-md px-4 py-2': !large,
        'bg-transparent boader-white': outline
      }"
      class="disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2"
      >
      {{label}}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() fullWidth?: boolean;
  @Input() secondary?: boolean;
  @Input() large?: boolean;
  @Input() disabled?: boolean;
  @Input() outline?: boolean = false;

  @Output() formSubmitted: EventEmitter<void> = new EventEmitter<void>();

  onSubmit(): void {
    this.formSubmitted.emit();
  }

}
