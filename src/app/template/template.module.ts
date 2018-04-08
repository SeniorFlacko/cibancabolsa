import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { PortafolioComponent, MercadocapitalesComponent, MercadodineroComponent, FondoinversionComponent, OrdenesComponent, ReportefinancieroComponent } from './index.templatecmpts';
import { MaterialModule } from '../material.module';
import { TablaOrdenesPendientesComponent } from './portafolio/tabla-ordenes-pendientes/tabla-ordenes-pendientes.component';
import { TablaMercadoCapitalesComponent } from './portafolio/tabla-mercado-capitales/tabla-mercado-capitales.component';
import { TablaMercadoDineroComponent } from './portafolio/tabla-mercado-dinero/tabla-mercado-dinero.component';
import { SlideToogleComponent } from './portafolio/slide-toogle/slide-toogle.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    PortafolioComponent,
    MercadocapitalesComponent,
    MercadodineroComponent,
    FondoinversionComponent,
    OrdenesComponent,
    ReportefinancieroComponent,
    TablaOrdenesPendientesComponent,
    TablaMercadoCapitalesComponent,
    TablaMercadoDineroComponent,
    SlideToogleComponent,

  ]
})
export class TemplateModule { }
