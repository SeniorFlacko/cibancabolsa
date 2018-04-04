import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService,SessionService,LoaderService,AuthGuard,ValuesTableService,
  OrdenesPendientesService, FondoInversionService, MercadoCapitalesService, 
  MercadoDineroService, PortafolioGraficaService } from './index.services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    AuthService,
    SessionService,
    LoaderService,
    AuthGuard,
    ValuesTableService,
    OrdenesPendientesService,
    FondoInversionService,
    MercadoCapitalesService,
    MercadoDineroService,
    PortafolioGraficaService
  ]
})
export class ServicesModule { }
