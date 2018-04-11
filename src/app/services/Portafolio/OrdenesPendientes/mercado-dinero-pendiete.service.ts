import { Injectable } from '@angular/core';
import { MercadoDineroPendiente } from '../../../models/index.models';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MercadoDineroPendieteService {
  private dataDineroPendiente = [
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
  constructor() { }

  getDineroPendiente(): Observable<MercadoDineroPendiente[]> {
    return of(this.dataDineroPendiente);
  }

}
