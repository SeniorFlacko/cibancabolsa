import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { PortafolioComponent, MercadocapitalesComponent, MercadodineroComponent, FondoinversionComponent, OrdenesComponent, ReportefinancieroComponent } from './index.templatecmpts';
import { MaterialModule } from '../material.module';
import { OrdenesPendientesComponent } from './portafolio/ordenes-pendientes/ordenes-pendientes.component';
import { TablaOrdenesPendientesComponent } from './portafolio/tabla-ordenes-pendientes/tabla-ordenes-pendientes.component';

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

  ]
})
export class TemplateModule { }
