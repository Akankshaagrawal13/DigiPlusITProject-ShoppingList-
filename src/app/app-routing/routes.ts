import { Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ItemdetailComponent } from '../itemdetail/itemdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'product',     component: ProductComponent },
  { path: 'contactus',     component: ContactComponent },
  { path: 'aboutus',     component: AboutComponent },
  { path: 'itemdetail/:id',     component: ItemdetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
