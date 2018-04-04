import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { MercadoCapitalesService, MercadoDineroService } from '../../../services/index.services';

@Component({
  selector: 'tabla-mercado-dinero',
  templateUrl: './tabla-mercado-dinero.component.html',
  styleUrls: ['./tabla-mercado-dinero.component.css']
})
export class TablaMercadoDineroComponent implements OnInit {

  dataDinero;
  displayedDinerosColumn = ['emisora','plazo','monto','nominal','preciouno','preciodos','rendimiento'];
  ordenes: boolean = false;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private mercadoDinService: MercadoDineroService) { }

  ngOnInit() {
    this.getOrdenesPendientes();
  }

  getOrdenesPendientes(){
    this.mercadoDinService.getDinero().subscribe(response =>{
      this.dataDinero = new MatTableDataSource(response)
      this.dataDinero.sort = this.sort;
    });
  }
  
}
