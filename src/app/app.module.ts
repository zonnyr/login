import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { ConsultService } from "./services/consult.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ConsultService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
