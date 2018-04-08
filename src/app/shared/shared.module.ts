import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TickerComponent } from './header/ticker/ticker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, TickerComponent],
  exports:[HeaderComponent]
})
export class SharedModule { }
