import { Injectable } from '@angular/core';
import { Mercadodinero } from '../models/mercadodinero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GenericService } from './generic.service';
import { Http } from '@angular/http';
@Injectable()
export class MercadoDineroService extends GenericService<Mercadodinero>{
  array: Mercadodinero[] = [
    {
      "id": "1",
      "emisora": "Reporto",
      "plazo": "1 día",
      "monto": "$55,003.88",
      "valor_nominal": "$102,766.99",
      "precio_uno": "97.94%",
      "precio_dos": "98.38%",
      "rendimiento": "23.59% anual",
    },
  ];
  constructor(http:Http) {
    super(http,"/mercadodineroportafolio.json");
  }

  getDinero(): Observable<Mercadodinero[]> {
    return of(this.array);
  }

}
