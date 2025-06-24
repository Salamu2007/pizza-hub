import { Routes } from '@angular/router';
import { Orders } from './orders/orders';
import { Meals } from './meals/meals';
import { RegisterResteau } from './register-resteau/register-resteau';
import { LoginResteau } from './login-resteau/login-resteau';
import { Workers } from './workers/workers';
import { Homemanager } from './homemanager/homemanager';

export const routes: Routes = [
  { path: 'orders', component: Orders },
  { path: 'meals', component: Meals },
  { path: 'register', component: RegisterResteau },
  { path: 'login', component: LoginResteau },
  { path: 'workers', component: Workers},
  { path: 'homeManager', component: Homemanager},
  { path: '', redirectTo: '/register', pathMatch: 'full' } // خيار إضافي جيد كبداية
];
