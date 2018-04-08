import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Ticker } from '../../models/ticker';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class TickerService {

  constructor(private http: Http) {

  }

  getValues():Observable<Ticker>{
    let URL= "https://cicasabolsa.firebaseio.com/valores.json";
    let headers = new Headers({'Content-Type':'application/json'});
    return this.http.get(URL).map(res=>{
      return res.json();
    });
  }
}
