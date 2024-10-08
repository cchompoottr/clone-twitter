import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'; // นำเข้า standalone component

const routes: Routes = [
  { path: '', component: LayoutComponent } // ใช้ standalone component ที่นี่
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
