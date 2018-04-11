import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent, MercadocapitalesComponent, MercadodineroComponent, FondoinversionComponent, OrdenesComponent, ReportefinancieroComponent } from './index.templatecmpts';

const routes: Routes = [
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'capitales', component: MercadocapitalesComponent }, 
  { path: 'dinero', component: MercadodineroComponent }, 
  { path: 'inversion', component: FondoinversionComponent }, 
  { path: 'ordenes', component: OrdenesComponent }, 
  { path: 'reportes', component: ReportefinancieroComponent },
  { path: 'reportes', component: ReportefinancieroComponent },
  { path: '', redirectTo: 'portafolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
