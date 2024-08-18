import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border-b-[1px] border-neutral-300 p-5">
      <div class="flex flex-row items-center gap-2">
        <span *ngIf="showBackArrow" class="material-icons text-black cursor-pointer" (click)="goBack()">
          arrow_back
        </span>
        <h1 class="text-black text-xl font-semibold">{{title}}</h1>
      </div>
    </div>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() showBackArrow: boolean = false;
  @Input() title: string = "";

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
