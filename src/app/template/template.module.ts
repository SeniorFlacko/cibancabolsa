import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { PortafolioComponent, MercadocapitalesComponent, MercadodineroComponent, FondoinversionComponent, OrdenesComponent, ReportefinancieroComponent } from './index.templatecmpts';
import { MaterialModule } from '../material.module';
import { OrdenesPendientesComponent } from './portafolio/ordenes-pendientes/ordenes-pendientes.component';
import { TablaOrdenesPendientesComponent } from './portafolio/tabla-ordenes-pendientes/tabla-ordenes-pendientes.component';
import { TablaMercadoCapitalesComponent } from './portafolio/tabla-mercado-capitales/tabla-mercado-capitales.component';
import { TablaMercadoDineroComponent } from './portafolio/tabla-mercado-dinero/tabla-mercado-dinero.component';

@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MaterialModule
  ],
  declarations: [
    PortafolioComponent,
    MercadocapitalesComponent,
    MercadodineroComponent,
    FondoinversionComponent,
    OrdenesComponent,
    ReportefinancieroComponent,
    OrdenesPendientesComponent,
    TablaOrdenesPendientesComponent,
    TablaMercadoCapitalesComponent,
    TablaMercadoDineroComponent,

  ]
})
export class TemplateModule { }
