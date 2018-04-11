import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService,SessionService,LoaderService,AuthGuard,TickerService, FondoInversionService, MercadoCapitalesService, 
  MercadoDineroService, PortafolioGraficaService, MercadoDineroPendieteService, OrdenesPendientesService, MercadoCapitalesDolaresService } from './index.services';

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
    TickerService,
    FondoInversionService,
    MercadoCapitalesService,
    MercadoDineroService,
    PortafolioGraficaService,
    MercadoDineroPendieteService,
    OrdenesPendientesService,
    MercadoCapitalesDolaresService
  ]
})
export class ServicesModule { }
