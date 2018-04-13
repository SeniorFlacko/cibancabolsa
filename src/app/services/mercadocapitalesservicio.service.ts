import { Injectable } from '@angular/core';
import { MercadoCapitales } from '../models/index.models';

@Injectable()
export class MercadocapitalesservicioService {
  private dataMercadoCap:MercadoCapitales[]=[
    {
      emisora:"CEMEX",
      precio_cierre:"$1992.23",
      precio_ultimo:"$123.2",
      precio_variacion:"5%",
      precio_compra:"$3500.00",
      precio_venta:"$125.00",
      volumen:"120",
      maximo:"400",
      minimo:"100",
      favorita:"no",
    },
    {
      emisora:"CEMEX",
      precio_cierre:"$1992.23",
      precio_ultimo:"$123.2",
      precio_variacion:"5%",
      precio_compra:"$3500.00",
      precio_venta:"$125.00",
      volumen:"120",
      maximo:"400",
      minimo:"100",
      favorita:"no",
    }
  ]

  constructor() { }

  getMercadoCapitalesData():MercadoCapitales[]{
    return this.dataMercadoCap;
  }

}
