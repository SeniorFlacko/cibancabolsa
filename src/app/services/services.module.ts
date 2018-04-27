import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AuthService, SessionService, LoaderService, AuthGuard, TickerService, FondoInversionService, MercadoCapitalesService,
  MercadoDineroService, PortafolioGraficaService, MercadoDineroPendieteService, OrdenesPendientesService,
  MercadoCapitalesDolaresService, MarcadorServicioService, FondosinversionService, MercadocapitalesservicioService,
  OrdenesService, FondosinversionpendientesService, HistorialService, MovimientosPorContratoService,
  ConfiguracionService, OperacionesRecientesService
} from './index.services';
import { ComprarvenderunoService } from './comprarvenderuno.service';


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
    OrdenesService,
    FondosinversionpendientesService,
    HistorialService,
    ConfiguracionService,
    MovimientosPorContratoService,
    ComprarvenderunoService,
    OperacionesRecientesService
  ]
})
export class ServicesModule { }
