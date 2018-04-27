import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TickerComponent } from './header/ticker/ticker.component';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './helpers/alert/alert.component';
import { MaterialModule } from '../material.module';
import { BuscadorComponent } from './header/buscador/buscador.component';
import { FechaComponent } from './header/fecha/fecha.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComprarvenderComponent } from './header/comprarvender/comprarvender.component';
import { ModalConfirmacionComponent } from '../template/modal-confirmacion/modal-confirmacion.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent, 
    TickerComponent,
    AlertComponent,
    BuscadorComponent,
    FechaComponent,
    ComprarvenderComponent,
    ModalConfirmacionComponent
  ],
  exports:[
    HeaderComponent,
    AlertComponent,
    ModalConfirmacionComponent
  ]
})
export class SharedModule { }
