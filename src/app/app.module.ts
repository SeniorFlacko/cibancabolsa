import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './template/header/header.component';
import { TemplateComponent } from './template/template.component';
import { AlertComponent } from './helpers/alert/alert.component';
import { ServicesModule } from './services/services.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TickerComponent } from './template/header/ticker/ticker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent,
    HeaderComponent,
    TickerComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServicesModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
