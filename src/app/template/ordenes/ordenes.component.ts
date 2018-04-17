import { Component, OnInit } from '@angular/core';
import { Orden } from '../../models/index.models';
import { OrdenesService } from '../../services/index.services';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  dataOrdenes: Orden[];

  displayedOrdenesColumn = [
    'fecha',
    'emisora',
    'folio',
    'sentido',
    'tipo_orden',
    'titulos',
    'precio',
    'precio_mercado',
    'precio_bruto',
    'precio_neto',
    'comision',
    'iva',
    'total',
    'estatus',
  ];

  constructor(private ordenesService: OrdenesService) { }

  ngOnInit() {
    this.dataOrdenes = this.ordenesService.getOrdenes();
  }

}
