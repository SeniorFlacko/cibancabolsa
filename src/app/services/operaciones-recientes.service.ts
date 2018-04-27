import { Injectable } from '@angular/core';
import {OperacionesRecientesTabla} from "../models/index.models";

@Injectable()
export class OperacionesRecientesService {
  dataRecientes:OperacionesRecientesTabla[]=[
    {
      precio:"$123.45",
      monto:"55",
      valor:"$55,342.00"
    },
    {
      precio:"$123.45",
      monto:"55",
      valor:"$55,342.00"
    }

  ];
  constructor() { }

  getDataOperaciones(){
    return this.dataRecientes;
  }

}
