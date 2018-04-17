import { Injectable } from '@angular/core';
import { FondoInversion } from '../models/index.models';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FondosinversionService {

<<<<<<< HEAD
  dataInversion:FondoInversion[] = [
    {
      id: "1",
      fondo: '123',
      serie: '345',
      operar: '456',
      clasificacion: '345',
      liquidacion: '3456',
      horizonte: '3456',
      maxima: '3456',
      calificacion: '3456',
      horario: '345'
    },
    {
      id: "2",
      fondo: '123',
      serie: '345',
      operar: '456',
      clasificacion: '345',
      liquidacion: '3456',
      horizonte: '3456',
      maxima: '3456',
      calificacion: '3456',
      horario: '345'
    },
    {
      id: "3",
      fondo: '123',
      serie: '345',
      operar: '456',
      clasificacion: '345',
      liquidacion: '3456',
      horizonte: '3456',
      maxima: '3456',
      calificacion: '3456',
      horario: '345'
    },
  ];
=======
  dataInversion:FondoInversion[];
>>>>>>> 90a17544b7d2499833804f2372d03d5709ac3555


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
