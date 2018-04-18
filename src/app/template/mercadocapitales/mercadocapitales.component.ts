import { Component, OnInit,ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { MercadocapitalesservicioService } from '../../services/index.services';
import { MercadoCapitales } from '../../models/index.models';

@Component({
  selector: 'app-mercadocapitales',
  templateUrl: './mercadocapitales.component.html',
  styleUrls: ['./mercadocapitales.component.css']
})
export class MercadocapitalesComponent implements OnInit {
  displayedColumns = ['emisora', 'precio_cierre', 'precio_ultimo', 'precio_variacion','precio_compra','precio_venta','volumen','maximo','minimo','favorita'];
  dataCapitales:MercadoCapitales[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private  dataCapService:MercadocapitalesservicioService) { }

  ngOnInit() {
    this.getDataCapitales();
  }

  getDataCapitales(){
    this.dataCapService.getMercadoCapitalesData().subscribe(response=>{
      this.dataCapitales=response;
    });
  }

  toggle(orden:MercadoCapitales){
    this.dataCapitales.forEach( capital => {
      capital.id === orden.id ? capital.favorita = !capital.favorita : null;
    });
    this.dataCapService.updateRegistro(orden).subscribe();
  }

  star_icon(star:boolean): string{
    return star ?  "star" : "star_border";
  }
}


