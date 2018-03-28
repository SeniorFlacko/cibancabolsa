import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { AuthGuard } from './auth.guard';
import { PortafolioComponent, MercadocapitalesComponent, MercadodineroComponent, FondoinversionComponent, OrdenesComponent, ReportefinancieroComponent } from './template/index.templatecmpts';

const routes: Routes = [
  { 
    path:'', 
    component: TemplateComponent,
    canActivate: [AuthGuard],
    children: [
        { path: 'portafolio', component: PortafolioComponent }, 
        { path: 'capitales', component: MercadocapitalesComponent }, 
        { path: 'dinero', component: MercadodineroComponent }, 
        { path: 'inversion', component: FondoinversionComponent }, 
        { path: 'ordenes', component: OrdenesComponent }, 
        { path: 'reportes', component: ReportefinancieroComponent }, 
        { path: '', redirectTo: 'portafolio', pathMatch: 'full' }
    ]
  },
  { path:'login', component: LoginComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
