import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module'; // นำเข้า routing module

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule // ตรวจสอบให้แน่ใจว่ามีการนำเข้าที่นี่
  ]
})
export class MainModule { }
