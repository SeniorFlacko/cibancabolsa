import { Injectable } from '@angular/core';
import { PosturasVenta } from '../models/index.models';

@Injectable()
export class PosturasVentaService {
  dataRecientes:PosturasVenta[]=[
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
