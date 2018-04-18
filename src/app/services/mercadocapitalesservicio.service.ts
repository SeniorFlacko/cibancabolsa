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

  updateRegistro( mercado_capitales:MercadoCapitales){
   
    let baseUrl = "https://cicasabolsa.firebaseio.com/mercadocapitales";

    let url = `${ baseUrl }/${ mercado_capitales.id }.json`;
    
    let body = JSON.stringify( mercado_capitales );
    
    return this.http.put( url, body);
  }

}
