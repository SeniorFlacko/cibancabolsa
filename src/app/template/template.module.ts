import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { PortafolioComponent, MercadocapitalesComponent, MercadodineroComponent, FondoinversionComponent, OrdenesComponent, ReportefinancieroComponent } from './index.templatecmpts';
import { MaterialModule } from '../material.module';
import { TablaMercadoCapitalesComponent } from './portafolio/tabla-mercado-capitales/tabla-mercado-capitales.component';
import { TablaMercadoDineroComponent } from './portafolio/tabla-mercado-dinero/tabla-mercado-dinero.component';
import { SlideToogleComponent } from './portafolio/slide-toogle/slide-toogle.component';
import { SharedModule } from '../shared/shared.module';
import { AvisoComponent } from './portafolio/aviso/aviso.component';
import { FavoritasComponent } from './portafolio/favoritas/favoritas.component';
import { TablaFondosInversionComponent } from './portafolio/tabla-fondos-inversion/tabla-fondos-inversion.component';
import { PortafolioUsdComponent } from './portafolio/portafolio-usd/portafolio-usd.component';
import { OrdenesPendientesTabsComponent } from './portafolio/ordenes-pendientes-tabs/ordenes-pendientes-tabs.component';
import { TablaMercadoCapitalesPendientesComponent } from './portafolio/ordenes-pendientes-tabs/tabla-mercado-capitales-pendientes/tabla-mercado-capitales-pendientes.component';
import { TablaMercadoDineroPendientesComponent } from './portafolio/ordenes-pendientes-tabs/tabla-mercado-dinero-pendientes/tabla-mercado-dinero-pendientes.component';
import { TablaFondosInversionPendientesComponent } from './portafolio/ordenes-pendientes-tabs/tabla-fondos-inversion-pendientes/tabla-fondos-inversion-pendientes.component';
import { TablaMercadoCapitalesUsdComponent } from './portafolio/portafolio-usd/tabla-mercado-capitales-usd/tabla-mercado-capitales-usd.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RetiroComponent } from './retiro/retiro.component';
import { EstadocuentaComponent } from './estadocuenta/estadocuenta.component';

@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    PortafolioComponent,
    MercadocapitalesComponent,
    MercadodineroComponent,
    FondoinversionComponent,
    OrdenesComponent,
    ReportefinancieroComponent,
    TablaMercadoCapitalesComponent,
    TablaMercadoDineroComponent,
    SlideToogleComponent,
    AvisoComponent,
    FavoritasComponent,
    TablaFondosInversionComponent,
    PortafolioUsdComponent,
    OrdenesPendientesTabsComponent,
    TablaMercadoCapitalesPendientesComponent,
    TablaMercadoDineroPendientesComponent,
    TablaFondosInversionPendientesComponent,
    TablaMercadoCapitalesUsdComponent,
    RetiroComponent,
    EstadocuentaComponent,

  ]
})
export class TemplateModule { }
