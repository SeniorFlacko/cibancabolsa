import { Injectable } from '@angular/core';
import { Configuracion } from '../models/index.models';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfiguracionService {

  constructor(private http: Http) { }

  getValues():Observable<Configuracion[]>{
    let URL= "https://cicasabolsa.firebaseio.com/configuracion.json";
    let headers = new Headers({'Content-Type':'application/json'});

    // Obtener respuesta cada segundo
    // return Observable.timer(0, 1000)
    //   .flatMapTo(this.http.get(URL))
    //   .map(res => res.json());
    
    return this.http.get(URL).map(res=>{
      console.log(res.json());
      return res.json();
    });
  }

}
