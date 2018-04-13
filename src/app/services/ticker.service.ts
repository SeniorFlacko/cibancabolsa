import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Ticker } from '../models/ticker';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/observable/timer';

@Injectable()
export class TickerService {

  constructor(private http: Http) {

  }

  getValues():Observable<Ticker>{
    let URL= "https://cicasabolsa.firebaseio.com/valores.json";
    let headers = new Headers({'Content-Type':'application/json'});

    // Obtener respuesta cada segundo
    return Observable.timer(0, 1000)
      .flatMapTo(this.http.get(URL))
      .map(res => res.json());
    
    // return this.http.get(URL).map(res=>{
    //   console.log(res.json());
    //   return res.json();
    // });
  }
}
