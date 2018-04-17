import { Component, OnInit } from '@angular/core';
import { FondosInversionPendientes } from '../../../../models/index.models';
import { FondosinversionpendientesService } from '../../../../services/index.services';


@Component({
  selector: 'tabla-fondos-inversion-pendientes',
  templateUrl: './tabla-fondos-inversion-pendientes.component.html',
  styleUrls: ['./tabla-fondos-inversion-pendientes.component.css']
})
export class TablaFondosInversionPendientesComponent implements OnInit {
  dataFondosInversion:FondosInversionPendientes[];
  displayedDinerosColumn = ['fecha','clave_pizarra',
  'folio_operacion','sentido','titulos','precio',
  'iva','importe','estatus'];
  constructor(private dataPendientes:FondosinversionpendientesService) { }

  ngOnInit() {
    this.dataFondosInversion=this.dataPendientes.getdataFondosPendiente();
  }

}
