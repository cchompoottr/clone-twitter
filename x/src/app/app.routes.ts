import { Routes } from '@angular/router';
import { LayoutComponent } from './main/layout/layout.component'; // ตัวอย่างการนำเข้า

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: '**', redirectTo: '' }
];
