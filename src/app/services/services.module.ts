import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService,SessionService,LoaderService,AuthGuard,TickerService, FondoInversionService, MercadoCapitalesService, 
  MercadoDineroService, PortafolioGraficaService, MercadoDineroPendieteService, OrdenesPendientesService, MercadoCapitalesDolaresService, MarcadorServicioService, FondosinversionService, MercadocapitalesservicioService, OrdenesService } from './index.services';

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
    MercadoCapitalesDolaresService,
    MarcadorServicioService,
    MercadocapitalesservicioService,
    FondosinversionService,
    OrdenesService
  ]
})
export class ServicesModule { }
