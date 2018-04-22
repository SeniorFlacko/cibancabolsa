import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent, MercadocapitalesComponent, MercadodineroComponent, FondoinversionComponent, OrdenesComponent, ReportefinancieroComponent, RetiroComponent, EstadocuentaComponent, ConfiguracionComponent } from './index.templatecmpts';
import { HistorialmovimientosComponent } from './historialmovimientos/historialmovimientos.component';

const routes: Routes = [
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'capitales', component: MercadocapitalesComponent }, 
  { path: 'dinero', component: MercadodineroComponent }, 
  { path: 'inversion', component: FondoinversionComponent }, 
  { path: 'ordenes', component: OrdenesComponent }, 
  { path: 'reportes', component: ReportefinancieroComponent },
  { path: 'reportes', component: ReportefinancieroComponent },
  { path: 'retiro', component: RetiroComponent },
  { path: 'estado-cuenta', component: EstadocuentaComponent },
  { path: 'historial', component: HistorialmovimientosComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: '', redirectTo: 'portafolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
