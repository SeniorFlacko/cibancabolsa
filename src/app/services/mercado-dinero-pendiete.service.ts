import { Injectable } from '@angular/core';
import { MercadoDineroPendiente } from '../models/index.models';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';

@Injectable()
export class MercadoDineroPendieteService {

  constructor(private http: Http) { }

  // getDineroPendiente(): Observable<MercadoDineroPendiente[]> {
  //   return of(this.dataDineroPendiente);
  // }

  getDineroPendiente():Observable<MercadoDineroPendiente[]>{
    let URL= "https://cicasabolsa.firebaseio.com/mercadodineropendientes.json";

    // Obtener respuesta cada segundo
    return Observable.timer(0, 10000)
      .flatMapTo(this.http.get(URL))
      .map(res => res.json());
  }

}
