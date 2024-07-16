// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { KitchenComponent } from './kitchen/kitchen.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bathroom', component: BathroomComponent },
  { path: 'livingroom', component: LivingroomComponent },
  { path: 'bedroom', component: BedroomComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'home', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }  // wildcard route for handling 404 errors
];
