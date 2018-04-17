import { Injectable } from '@angular/core';
import { CapitalDolar } from '../models/index.models';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MercadoCapitalesDolaresService {

  capitales_dolares: CapitalDolar[] = [
    {
      "id": "1",
      "emisora": "CEMEX",
      "titulos": "1000",
      "costo_promedio": "$120.00",
      "costo_total": "$120,000.00",
      "variacion": "-2.80",
      "precio": "$116.64",
      "valuacion": "$116,000.00",
    },
  ];

  constructor() { }
  
  getCapitalesUSD(): Observable<CapitalDolar[]> {
    return of(this.capitales_dolares);
  }
}
