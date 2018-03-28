import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { AuthGuard } from './auth.guard';
import { PortafolioComponent } from './template/portafolio/portafolio.component';
import { MercadocapitalesComponent } from './template/mercadocapitales/mercadocapitales.component';

const routes: Routes = [
  { 
    path:'', 
    component: TemplateComponent,
    canActivate: [AuthGuard],
    children: [
        { path: 'portafolio', component: PortafolioComponent }, 
        { path: 'capitales', component: MercadocapitalesComponent }, 
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
