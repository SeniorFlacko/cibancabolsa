import { Injectable } from '@angular/core';
import { MercadoCapitales } from '../models/index.models';

@Injectable()
export class MercadocapitalesservicioService {
  private dataMercadoCap:MercadoCapitales[]=[
    {
      id: 1,
      emisora:"ALFA A",
      precio_cierre:"$126.37",
      precio_ultimo:"$130.29",
      precio_variacion:"3.1",
      precio_compra:"130.29",
      precio_venta:"130.29",
      volumen:"749,368",
      maximo:"131.48",
      minimo:"126.91",
      favorita:true,
    },
    {
      id: 2,
      emisora:"ALFA A",
      precio_cierre:"$126.37",
      precio_ultimo:"$130.29",
      precio_variacion:"3.1",
      precio_compra:"130.29",
      precio_venta:"130.29",
      volumen:"749,368",
      maximo:"131.48",
      minimo:"126.91",
      favorita:true,
    },
    {
      id: 3,
      emisora:"ALFA A",
      precio_cierre:"$126.37",
      precio_ultimo:"$130.29",
      precio_variacion:"3.1",
      precio_compra:"130.29",
      precio_venta:"130.29",
      volumen:"749,368",
      maximo:"131.48",
      minimo:"126.91",
      favorita:false,
    },
    {
      id: 4,
      emisora:"ALFA A",
      precio_cierre:"$126.37",
      precio_ultimo:"$130.29",
      precio_variacion:"3.1",
      precio_compra:"130.29",
      precio_venta:"130.29",
      volumen:"749,368",
      maximo:"131.48",
      minimo:"126.91",
      favorita:true,
    },
  ]

  constructor() { }

  getMercadoCapitalesData():MercadoCapitales[]{
    return this.dataMercadoCap;
  }

}
