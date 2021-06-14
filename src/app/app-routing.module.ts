import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { LoginComponent } from "../app/pages/login/login.component";
import { HomeComponent } from "../app/pages/home/home.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        useHash: true,
        onSameUrlNavigation: 'reload',
  
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
