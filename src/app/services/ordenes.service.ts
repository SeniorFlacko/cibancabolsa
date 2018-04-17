import { Injectable } from '@angular/core';
import { Orden } from '../models/index.models';

@Injectable()
export class OrdenesService {
  private dataOrdenes: Orden[] = [
    {
      "id": "1",
      fecha: "06/12",
      emisora: "SARE B",
      folio: "2334",
      sentido: "Compra",
      tipo_orden: "Limitada",
      titulos: "100",
      precio: "99.81",
      precio_mercado: "99.81",
      precio_bruto: "20,568.19",
      precio_neto: "20,568.19",
      comision: "140.64",
      iva: "3.19",
      total: "1,384,399.03",
      estatus: "asignado",
    },
    {
      "id": "2",
      fecha: "06/12",
      emisora: "SARE B",
      folio: "2334",
      sentido: "Compra",
      tipo_orden: "Limitada",
      titulos: "100",
      precio: "99.81",
      precio_mercado: "99.81",
      precio_bruto: "20,568.19",
      precio_neto: "20,568.19",
      comision: "140.64",
      iva: "3.19",
      total: "1,384,399.03",
      estatus: "cancelado",
    },
    {
      "id": "3",
      fecha: "06/12",
      emisora: "SARE B",
      folio: "2334",
      sentido: "Compra",
      tipo_orden: "Limitada",
      titulos: "100",
      precio: "99.81",
      precio_mercado: "99.81",
      precio_bruto: "20,568.19",
      precio_neto: "20,568.19",
      comision: "140.64",
      iva: "3.19",
      total: "1,384,399.03",
      estatus: "pendiente",
    },
  ];

  constructor() { }

  getOrdenes():Orden[]{
    return this.dataOrdenes;
  }

}
