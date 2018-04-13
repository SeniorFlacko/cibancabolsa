import { Injectable } from '@angular/core';
import { MercadoDineroPendiente } from '../models/index.models';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MercadoDineroPendieteService {
  private dataDineroPendiente = [
    {
      fecha: "01/18",
      clave_pizarra: "Privado",
      folio_operacion: "00013",
      sentido: "venta",
      tasa:"15%",
      iva:"$1995.34",
      importe:"$11,23.23",
      estatus:"vigente",
      plazo:"20 días",
    },
    {
      fecha: "02/18",
      clave_pizarra: "Gubernamental",
      folio_operacion: "00018",
      sentido: "compra",
      tasa:"190%",
      iva:"$19,959.34",
      importe:"$115,23.23",
      estatus:"vigente",
      plazo:"320 días",
    },
  ];
  constructor() { }

  getDineroPendiente(): Observable<MercadoDineroPendiente[]> {
    return of(this.dataDineroPendiente);
  }

}
