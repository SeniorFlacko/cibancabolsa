import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HistorialService {

  private historialSubject = new BehaviorSubject<any>({});

  constructor() { }


  sendMessage( message: any ){
    this.historialSubject.next( message );  
  }

  get historial$(): Observable<any>{
    return this.historialSubject.asObservable();
  }

}
