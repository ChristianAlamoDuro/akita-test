import { Routes } from '@angular/router';
import { StoreComponent } from './modules/store/store.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/store',
    pathMatch: 'full',
  },
  {
    path: 'store',
    component: StoreComponent,
  },
];
