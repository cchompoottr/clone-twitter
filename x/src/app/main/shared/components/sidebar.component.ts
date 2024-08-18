import { Component } from '@angular/core';
import { SidebarItemComponent } from "./sidebar-item.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarItemComponent],
  template: `
  <div class="col-span-1 h-full pr-4 md:pr-6">
    <div class="flex flex-col-items-end">
      <div class="space-y-2 lg-w-[230px]">
        <sidebar-item/>
      </div>
    </div>
  </div>
  `,
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
