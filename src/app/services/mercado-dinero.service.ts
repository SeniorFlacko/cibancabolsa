import { Injectable } from '@angular/core';
import { Mercadodinero } from '../models/mercadodinero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class MercadoDineroService {
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
  constructor() { }

  getDinero(): Observable<Mercadodinero[]> {
    return of(this.array);
  }

}
