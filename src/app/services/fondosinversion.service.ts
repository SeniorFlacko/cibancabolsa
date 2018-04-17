import { Injectable } from '@angular/core';
import { FondoInversion } from '../models/index.models';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FondosinversionService {

  dataInversion:FondoInversion[];


  constructor(private http: Http) { }

  getDataFondoInversion():FondoInversion[]{
    return this.dataInversion;
  }

  getValues():Observable<FondoInversion[]>{
    let URL= "https://cicasabolsa.firebaseio.com/fondoinversion.json";
    let headers = new Headers({'Content-Type':'application/json'});

    // Obtener respuesta cada segundo
    return Observable.timer(0, 10000)
      .flatMapTo(this.http.get(URL))
      .map(res => res.json());
    
    // return this.http.get(URL).map(res=>{
    //   console.log(res.json());
    //   return res.json();
    // });
  }

}
