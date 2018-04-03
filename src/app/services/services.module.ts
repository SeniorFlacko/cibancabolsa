import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService,SessionService,LoaderService,AuthGuard } from './index.services';
import { ValuesTableService } from './HeaderServices/valuesTable.service';

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
    ValuesTableService
  ]
})
export class ServicesModule { }
