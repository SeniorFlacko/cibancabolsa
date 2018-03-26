import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { 
    path:'', 
    component: TemplateComponent,
    canActivate: [AuthGuard],
    children: [
        { path: 'home', component: PortafolioComponent }, 
        { path: '', redirectTo: 'home', pathMatch: 'full' }
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
