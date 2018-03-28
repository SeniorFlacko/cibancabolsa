import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HeaderComponent } from './template/header/header.component';
import { TemplateComponent } from './template/template.component';
import { AuthGuard } from './auth.guard';
import { AuthService,SessionService, LoaderService } from './services/index.services';
import { AlertComponent } from './helpers/alert/alert.component';
import { PortafolioComponent } from './template/portafolio/portafolio.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent,
    PortafolioComponent,
    HeaderComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,SessionService,AuthGuard,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
