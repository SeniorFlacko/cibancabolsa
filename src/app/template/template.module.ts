import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { PortafolioComponent, MercadocapitalesComponent, MercadodineroComponent, FondoinversionComponent, OrdenesComponent, ReportefinancieroComponent } from './index.templatecmpts';

@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule
  ],
  declarations: [
    PortafolioComponent,
    MercadocapitalesComponent,
    MercadodineroComponent,
    FondoinversionComponent,
    OrdenesComponent,
    ReportefinancieroComponent,
  ]
})
export class TemplateModule { }
