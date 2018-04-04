import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { OrdenPendiente } from '../../../models/index.models';

@Injectable()
export class OrdenesPendientesService {
  ordenes_pendientes: OrdenPendiente[] = [
    {
      "fecha": "06/12",
      "emisora": "SARE B",
      "sentido": "Compra",
      "orden": "Limitada",
      "estatus": "Vigente",
      "titulos": "2500",
      "precio_limite": "$40.90",
      "precio_promedio": "$40.81",
      "total": "$40.81"
    },
    {
      "fecha": "01/12",
      "emisora": "ABC",
      "sentido": "Compra",
      "orden": "Limitada",
      "estatus": "Vigente",
      "titulos": "2500",
      "precio_limite": "$40.90",
      "precio_promedio": "$40.81",
      "total": "$40.81"
    }
  ];
  constructor() { }
  
  getOrdenesPendientes(): Observable<OrdenPendiente[]> {
    return of(this.ordenes_pendientes);
  }
}
