import { Component, OnInit } from '@angular/core';
import { MercadoDineroPendieteService } from '../../../../services/index.services';
import { Observable } from 'rxjs/Observable';
import { MercadoDineroPendiente } from '../../../../models/index.models';

@Component({
  selector: 'tabla-mercado-dinero-pendientes',
  templateUrl: './tabla-mercado-dinero-pendientes.component.html',
  styleUrls: ['./tabla-mercado-dinero-pendientes.component.css']
})
export class TablaMercadoDineroPendientesComponent implements OnInit {
  
  dataDineroPendiente: Observable<MercadoDineroPendiente[]>;
  displayedDinerosColumn = ['fecha','clave_pizarra',
  'monto','nominal','tasa',
  'iva','importe','estatus','plazo'];

  constructor(private mercadoDin:MercadoDineroPendieteService) { }

  ngOnInit() {
    this.getOrdenesPendientes();
    this.dataDineroPendiente = this.mercadoDin.getDineroPendiente();
  }

  getOrdenesPendientes(){
    // this.mercadoDinService.getDinero().subscribe(response =>{
    //   this.dataDinero = new MatTableDataSource(response)
    //   this.dataDinero.sort = this.sort;
    // });
  }

}
