import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSortModule, MatProgressSpinnerModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule

  ],
  exports:[
    MatButtonModule, 
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
