import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HeaderComponent } from './header/header.component';
import { TemplateComponent } from './template/template.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { AuthGuard } from './auth.guard';
import { SessionService } from './services/session.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    TemplateComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,SessionService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
