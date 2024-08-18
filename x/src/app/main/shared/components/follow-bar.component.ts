import { Component } from '@angular/core';
import { AvatarComponent } from "./avatar.component";

@Component({
  selector: 'app-follow-bar',
  standalone: true,
  imports: [AvatarComponent],
  template: `
    <div class="px-8 py-4 hidden lg:block">
      <div class="bg-[#EBEEF0] rounded-xl p-4">
        <h2 class="text-black text-xl font-semibold">ติดตามใครดี</h2>
        <div class="flex flex-col gap-6 mt-4">
          <div class="flex flex-row gap-4">
            <!--avatar-->
            <Avatar/>
            <div class="flex flex-col">
              <p class="text-black font-semibold text-sm">
                Fullname
              </p>
              <p class="text-neutral-500 text-sm">
                &#64;username
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './follow-bar.component.scss'
})
export class FollowBarComponent {

}
