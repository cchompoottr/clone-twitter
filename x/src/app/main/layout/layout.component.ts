import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../shared/components/sidebar.component";
import { HeaderComponent } from "../shared/components/header.component";
import { FollowBarComponent } from "../shared/components/follow-bar.component"; 
import { LoginModalComponent } from '../shared/auth/login-modal/login-modal.component';
import { RegisterModalComponent } from '../shared/auth/register-modal/register-modal.component';
import { ButtonComponent } from '../shared/components/button.component';
import { ModelService } from '../shared/services/model/model.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true, 
  imports: [CommonModule, RouterModule, SidebarComponent, HeaderComponent, FollowBarComponent, LoginModalComponent, RegisterModalComponent, ButtonComponent] 

})
export class LayoutComponent {
  constructor(public modalService: ModelService) { }
 }
