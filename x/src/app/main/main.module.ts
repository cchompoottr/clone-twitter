import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component'; // นำเข้าคอมโพเนนต์ standalone

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
