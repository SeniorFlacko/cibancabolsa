import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService,SessionService,LoaderService,AuthGuard,ValuesTableService,OrdenesPendientesService } from './index.services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    AuthService,
    SessionService,
    LoaderService,
    AuthGuard,
    ValuesTableService,
    OrdenesPendientesService,
  ]
})
export class ServicesModule { }
