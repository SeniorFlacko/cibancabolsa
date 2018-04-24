import { Component, OnInit } from '@angular/core';
import { HistorialService, MovimientosPorContratoService } from '../../../services/index.services';

import { MovimientosPorContrato } from '../../../models/index.models';

@Component({
  selector: 'app-tabla-historial',
  templateUrl: './tabla-historial.component.html',
  styleUrls: ['./tabla-historial.component.css']
})
export class TablaHistorialComponent implements OnInit {
  displayedColumns = ['fecha_op', 'fecha_liq', 'descripcion', 'emisora','serie','cupon','titulos','plazo','tasa','precio','comision','iva','isr','importe','saldo'];
  dataHistorialMovimientos:MovimientosPorContrato[];
  constructor(private hs: MovimientosPorContratoService) { }

  ngOnInit() {
    this.getDataHistorial();
  }


  getDataHistorial(){
    this.dataHistorialMovimientos=this.hs.getHistorialData();
  }

}
