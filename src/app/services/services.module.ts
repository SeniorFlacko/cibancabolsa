import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService,SessionService,LoaderService,AuthGuard,TickerService, FondoInversionService, MercadoCapitalesService,
  MercadoDineroService, PortafolioGraficaService, MercadoDineroPendieteService, OrdenesPendientesService, MercadoCapitalesDolaresService, MarcadorServicioService } from './index.services';
import {MercadocapitalesservicioService} from './mercado-capitales/mercadocapitalesservicio.service';

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
    MercadocapitalesservicioService
  ]
})
export class ServicesModule { }
