import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarItems } from '../../interface';
import { ModelService } from '../services/model/model.service';


@Component({
  selector: 'sidebar-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div class="rounded-full h-20 w-20 p-4 flex items-center justify-center hover:bg-opacity-10 hover:bg-blue-300 cursor-pointer transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-9 w-9 text-twitter-blue"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
  </div>
  <div class="flex flex-row items-center" *ngFor="let item of items">
    <a [routerLink]="item.route" 
    [ngClass]="{'text-black': !item.isActive, 'text-twitter-blue': item.isActive}"
        class="material-icons relative text-4xl rounded-full h-16 w-16 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
      {{item.icon}}
    </a>
    <a [routerLink]="item.route" class="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
      <p class="hidden lg:block text-black text-xl font-bold">{{item.label}}</p>
    </a>
  </div>

  <!-- logout button -->
   <div class="flex flex-row items-center">
    <div class="material-icons text-black relative text-4xl rounded-full h-16 w-16 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
      logout
    </div>
    <div class="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
      <p class="hidden lg:block text-black text-xl font-bold">ออกจากระบบ</p>
    </div>
   </div>

   <!-- tweet button -->
    <div class="mt-6 lg:hidden h-14 w-14 rounded-full p-4 flex items-center justify-center bg-twitter-blue hover:bg-opacity-80 transition cursor-pointer">
      <!-- tweet icon -->
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
        <g><g><path fill="#ffffff" data-title="Layer 0" xs="0" d="M193.5,35c-29.4,20.6-67.7,52.5-104.9,110.2c-37.3,57.7-55.4,109.1-31.5,94.4c0,0,39.6-76.4,68.2-89.2c28.6-12.8,56-16,73.4-36.7c0,0,7.8-14.4-26.2,0c0,0-11.9-1.7,5.2-10.5c17.1-8.8,52.9-26.8,57.7-42c0,0,7.6-9.7-15.8,0s-27.7,5.4-10.5-5.2c17.2-10.7,35-25.4,36.7-36.7C247.6,7.9,222.8,14.4,193.5,35z M94,37.6c0-5.8-4.7-10.5-10.5-10.5h-63c-5.8,0-10.5,4.7-10.5,10.5v89.2c0,5.8,4.7,10.5,10.5,10.5c5.8,0,10.5-4.7,10.5-10.5V48.1h52.5C89.3,48.1,94,43.5,94,37.6z M227.4,168.8c-5.8,0-10.5,4.7-10.5,10.5v42h-83.9c-5.8,0-10.5,4.7-10.5,10.5c0,5.8,4.7,10.5,10.5,10.5h89.2c0.9,0,1.8-0.1,2.6-0.3c0.8,0.2,1.7,0.3,2.6,0.3c5.8,0,10.5-4.7,10.5-10.5v-52.5C237.8,173.5,233.1,168.8,227.4,168.8z"/><path fill="#ffffff" data-title="Layer 1" xs="1" d="M193.5,35c-29.4,20.6-67.7,52.5-104.9,110.2c-37.3,57.7-55.4,109.1-31.5,94.4c0,0,39.6-76.4,68.2-89.2c28.6-12.8,56-16,73.4-36.7c0,0,7.8-14.4-26.2,0c0,0-11.9-1.7,5.2-10.5c17.1-8.8,52.9-26.8,57.7-42c0,0,7.6-9.7-15.8,0s-27.7,5.4-10.5-5.2c17.2-10.7,35-25.4,36.7-36.7C247.6,7.9,222.8,14.4,193.5,35z M94,37.6c0-5.8-4.7-10.5-10.5-10.5h-63c-5.8,0-10.5,4.7-10.5,10.5v89.2c0,5.8,4.7,10.5,10.5,10.5c5.8,0,10.5-4.7,10.5-10.5V48.1h52.5C89.3,48.1,94,43.5,94,37.6z M227.4,168.8c-5.8,0-10.5,4.7-10.5,10.5v42h-83.9c-5.8,0-10.5,4.7-10.5,10.5c0,5.8,4.7,10.5,10.5,10.5h89.2c0.9,0,1.8-0.1,2.6-0.3c0.8,0.2,1.7,0.3,2.6,0.3c5.8,0,10.5-4.7,10.5-10.5v-52.5C237.8,173.5,233.1,168.8,227.4,168.8z"/></g></g>
      </svg>
    </div>
    <div 
      (click)="openLoginModal()"
      class="mt-6 hidden lg:block px-6 py-3 rounded-full bg-twitter-blue hover:bg-opacity-90 cursor-pointer transition">
      <p class="text-white text-center font-semibold text-[18px]">
        โพสต์
      </p>
    </div>
  `,
  styleUrl: './sidebar-item.component.scss'
})
export class SidebarItemComponent {
  items: Array<SidebarItems> = [
    {
      label: 'หน้าแรก',
      route: '/',
      icon: 'home',
      isActive: true
    },
    {
      label: 'การแจ้งเตือน',
      route: '/notifications',
      icon: 'notifications'
    }
  ]

  constructor(private modalService: ModelService){}

  openLoginModal(): void {
    console.log('Open Login Modal Clicked'); 
    this.modalService.isLoginModelOpen.set(true);
  }

  signOut() {
    
  }

}
