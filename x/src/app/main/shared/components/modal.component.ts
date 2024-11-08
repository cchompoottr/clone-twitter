import { Component, Input, Output, TemplateRef, EventEmitter } from '@angular/core';
import { ButtonComponent } from "./button.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'Modal',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  template: `
    <div 
    *ngIf="isOpen"
    class="
      justify-center
      items-center
      flex
      overflow-x-hidden
      overflow-y-auto
      fixed
      inset-0
      z-50
      outline-none
      focus:outline-none
      bg-white
      bg-opacity-80
    ">
    <div class="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
      <!--contant -->
      <div class="
        h-full
        lg:h-auto
        border-0
        rounded-lg
        shadow-lg
        relative
        flex
        flex-col
        w-full
        bg-white
        outline-none
        focus:outline-none
        ">
        <!--header-->

        <button class="p-1 ml-auto m-3 border-0 text-black hover:opacity-70 transition" (click)="close()">
          <span class="material-icons">close</span>
        </button>

        <div class="items-center flex justify-center mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-11 w-11 text-twitter-blue"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </div>

        <h3 class="text-3xl text-center font-semibold text-black">{{title}}</h3>

      
      <!--body-->
      <div class="relative p-10 flex-auto">
        <ng-content></ng-content>
      </div>
      <!--footer-->
        <div class="flex flex-col gap-2 p-10">
          <app-button
            (formSubmitted)="submit()"
            [disabled]="disabled"
            [label]="actionLabel"
            [secondary]="true"
            [fullWidth]="true"
            [large]="true"
            >
          </app-button>
          <ng-container *ngIf="footer">
            <ng-container *ngTemplateOutlet="footer"></ng-container>
          </ng-container>

        </div>
    </div>
  </div>
</div>
  `,
  styles: ``
})
export class ModalComponent {
  @Input() isOpen: boolean = true;
  @Input() title: string = '';
  @Input() footer?: TemplateRef<any>;
  @Input() actionLabel: string = '';
  @Input() disabled?: boolean;

  @Output() formSubmitted: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  submit(): void {
    this.disabled = true;
    this.actionLabel = "Loading...";
    this.formSubmitted.emit();
  }

  close(): void {
    this.onClose.emit()
  }



}
