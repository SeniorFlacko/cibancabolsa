import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HeaderComponent } from './template/header/header.component';
import { TemplateComponent } from './template/template.component';
import { AlertComponent } from './helpers/alert/alert.component';
import { PortafolioComponent, MercadocapitalesComponent } from './template/index.templatecmpts';
import { MercadodineroComponent } from './template/mercadodinero/mercadodinero.component';
import { FondoinversionComponent } from './template/fondoinversion/fondoinversion.component';
import { OrdenesComponent } from './template/ordenes/ordenes.component';
import { ReportefinancieroComponent } from './template/reportefinanciero/reportefinanciero.component';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent,
    HeaderComponent,
    AlertComponent,
    PortafolioComponent,
    MercadocapitalesComponent,
    MercadodineroComponent,
    FondoinversionComponent,
    OrdenesComponent,
    ReportefinancieroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
