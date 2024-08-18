import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../shared/components/sidebar.component";
import { HeaderComponent } from "../shared/components/header.component";
import { FollowBarComponent } from "../shared/components/follow-bar.component"; // นำเข้า RouterModule

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true, // ประกาศว่าเป็น standalone component
  imports: [RouterModule, SidebarComponent, HeaderComponent, FollowBarComponent] // นำเข้า RouterModule ใน standalone component
 // นำเข้า RouterModule ใน standalone component
 // นำเข้า RouterModule ใน standalone component
 // นำเข้า RouterModule ใน standalone component
})
export class LayoutComponent { }
