import { Injectable } from '@angular/core';
import { MovimientosPorContrato} from '../models/index.models';

@Injectable()
export class MovimientosPorContratoService {
 private dataMovimientos:MovimientosPorContrato[]= [
   {
      fecha_op:"13/12",
      fecha_liq:"13/12",
      descripcion: "CPA. Acciones",
      emisora: "BONDES",
      serie: "200924",
      cupon: "0058",
      titulos: "12,013",
      plazo: "0",
      tasa: "0.00",
      precio: "99.42525",
      comision: "0.00",
      iva: "325.4532",
      isr: "0.00",
      importe: "364",
      saldo: "63,122.22"
    },
    {
      fecha_op:"13/12",
      fecha_liq:"13/12",
      descripcion: "VTA VENC. REP.",
      emisora: "BONDES",
      serie: "*",
      cupon: "0023",
      titulos: "12,013",
      plazo: "0",
      tasa: "0.00",
      precio: "99.42525",
      comision: "0.00",
      iva: "278.21.4532",
      isr: "0.00",
      importe: "364",
      saldo: "63,122.22"
    }];
  constructor() { }


  getHistorialData():MovimientosPorContrato[]{
    return this.dataMovimientos;
  }
}
