import { Injectable } from '@angular/core';
import { PosturasCompra} from "../models/index.models";

@Injectable()
export class PosturasCompraService {
  dataRecientes:PosturasCompra[]=[
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
