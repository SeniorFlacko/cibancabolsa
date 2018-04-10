import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabla-mercado-dinero-pendientes',
  templateUrl: './tabla-mercado-dinero-pendientes.component.html',
  styleUrls: ['./tabla-mercado-dinero-pendientes.component.css']
})
export class TablaMercadoDineroPendientesComponent implements OnInit {
  
  dataDineroPendiente = [
    {
      "fecha": "string",
      "clave_pizarra": "string",
      "folio_operacion": "string",
      "sentido": "string",
      "tasa":"string",
      "iva":"string",
      "importe":"string",
      "estatus":"string",
      "plazo":"string",
    }
  ];
  displayedDinerosColumn=['fecha','clave_pizarra',
  'monto','nominal','tasa',
  'iva','importe','estatus','plazo'];

  constructor() { }

  ngOnInit() {
    this.getOrdenesPendientes();
  }

  getOrdenesPendientes(){
    // this.mercadoDinService.getDinero().subscribe(response =>{
    //   this.dataDinero = new MatTableDataSource(response)
    //   this.dataDinero.sort = this.sort;
    // });
  }

}
