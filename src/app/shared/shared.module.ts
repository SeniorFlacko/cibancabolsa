import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TickerComponent } from './header/ticker/ticker.component';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './helpers/alert/alert.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent, 
    TickerComponent,
    AlertComponent
  ],
  exports:[
    HeaderComponent,
    AlertComponent
  ]
})
export class SharedModule { }
