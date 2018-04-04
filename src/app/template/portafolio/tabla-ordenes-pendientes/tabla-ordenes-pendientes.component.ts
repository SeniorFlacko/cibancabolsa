import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { OrdenesPendientesService } from '../../../services/index.services';

@Component({
  selector: 'tabla-ordenes-pendientes',
  templateUrl: './tabla-ordenes-pendientes.component.html',
  styleUrls: ['./tabla-ordenes-pendientes.component.css']
})
export class TablaOrdenesPendientesComponent implements OnInit {
  dataOrdenes;
  displayedOrdenColumns = ['fecha','emisora','sentido','orden','estatus','titulos','limite','promedio','total'];
  ordenes: boolean = false;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private opendientesService: OrdenesPendientesService) { }

  ngOnInit() {
    this.getOrdenesPendientes();
  }

  getOrdenesPendientes(){
    this.opendientesService.getOrdenesPendientes().subscribe(response =>{
      this.dataOrdenes = new MatTableDataSource(response)
      this.dataOrdenes.sort = this.sort;
    });
  }

}
