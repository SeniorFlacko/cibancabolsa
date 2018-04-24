import { Injectable } from '@angular/core';
import { Capital } from '../models/capital';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { GenericService } from './generic.service';
import { Http } from '@angular/http';

@Injectable()
export class MercadoCapitalesService extends GenericService<Capital>{
  capitales: Capital[] = [
    {
      "id":"1",
      "emisora": "CEMEX",
      "titulos": "1000",
      "costo_promedio": "$120.00",
      "costo_total": "$120,000.00",
      "variacion": "-2.80",
      "precio": "$116.64",
      "valuacion": "$116,000.00",
    },
  ];
  constructor(http:Http) {
    super(http,'/mercadocapitalesportafolio.json');
  }

  getCapitales(): Observable<Capital[]> {
    return of(this.capitales);
  }

}
