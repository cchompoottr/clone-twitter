import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
    [ngClass]="{'border-4 border-black': hasBorder, 'h-32 w-32': isLarge, 'h-12 w-12': !isLarge}"
    class="rounded-full hover:opacity-90 transition cursor-pointer relative">
      <img src="./user.png" class="object-cover rounded-full h-10 w-10 bg-white p-2" alt="avatar">
    </div>
  `,
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() userId: string = '';
  @Input() isLarge: boolean = false;
  @Input() hasBorder: boolean = false;
}
