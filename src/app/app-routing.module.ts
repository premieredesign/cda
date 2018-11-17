import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './signup/signup.component';

const route: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'signup', component: SignupComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
