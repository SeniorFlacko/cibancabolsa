import { Component, OnInit, ViewChild } from '@angular/core';
import { MercadoCapitalesService } from '../../../services/index.services';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'tabla-mercado-capitales',
  templateUrl: './tabla-mercado-capitales.component.html',
  styleUrls: ['./tabla-mercado-capitales.component.css']
})
export class TablaMercadoCapitalesComponent implements OnInit {

  dataCapitales;
  displayedCapitalesColumn = ['emisora','titulos','promedio','total','variacion','precio','valuacion'];
  ordenes: boolean = false;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private mercadoCapService: MercadoCapitalesService) { }

  ngOnInit() {
    this.getOrdenesPendientes();
  }

  getOrdenesPendientes(){
    this.mercadoCapService.getCapitales().subscribe(response =>{
      this.dataCapitales = new MatTableDataSource(response)
      this.dataCapitales.sort = this.sort;
    });
  }

}
