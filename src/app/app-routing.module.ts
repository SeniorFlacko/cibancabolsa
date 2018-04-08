import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/index.services';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { 
    path:'', 
    component: DashboardComponent,
    canActivate: [AuthGuard],
    loadChildren: 'app/template/template.module#TemplateModule'
  },
  { path:'login', component: LoginComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
