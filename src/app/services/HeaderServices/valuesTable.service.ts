import { Injectable } from '@angular/core';

@Injectable()
export class ValuesTableService {

  dolarbuy: number;
  dolarsell:number;

  constructor() {
    this.dolarbuy = 18.00;
    this.dolarsell = 20.00;

  }

  URL= "https://cicasabolsa.firebaseio.com/valores";



  

}
