import { Injectable } from '@angular/core';
import { Capital } from '../../../models/capital';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MercadoCapitalesService {
  capitales: Capital[] = [
    {
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

  getCapitales(): Observable<Capital[]> {
    return of(this.capitales);
  }

}
