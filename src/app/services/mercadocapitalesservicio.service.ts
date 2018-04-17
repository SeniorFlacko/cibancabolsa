import { Injectable } from '@angular/core';
import { MercadoCapitales } from '../models/index.models';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class MercadocapitalesservicioService {


  constructor(private http: Http) { }


  getMercadoCapitalesData():Observable<MercadoCapitales[]>{
    let URL= "https://cicasabolsa.firebaseio.com/mercadocapitales.json";

    // Obtener respuesta cada segundo
    return Observable.timer(0, 10000)
      .flatMapTo(this.http.get(URL))
      .map(res => res.json());
  }
}
