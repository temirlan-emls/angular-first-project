import { Routes } from '@angular/router';
import { FreedbackComponent } from './pages/freedback/freedback.component';
import { ProductComponent } from './pages/product/product.component';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
  { path: '', component: ShopComponent, pathMatch: 'full' },
  { path: 'feedback', component: FreedbackComponent },
  { path: 'product/:id', component: ProductComponent },
];
