import { Injectable } from '@angular/core';
import { FondosInversionPendientes } from '../models/index.models';


@Injectable()
export class FondosinversionpendientesService {

  private _dataFondosPendiente:FondosInversionPendientes[]=[
    {
      fecha: "21/04/18",
      clave_pizarra: "CIGUB",
      folio_operacion: "0001",
      sentido: "Compra",
      titulos:"2500",
      precio:"$40.9",
      iva:"$4.9",
      importe:"$114.98",
      estatus:"Vigente"
    },
    {
      fecha: "21/04/18",
      clave_pizarra: "CIGUB",
      folio_operacion: "0001",
      sentido: "Compra",
      titulos:"2500",
      precio:"$40.9",
      iva:"$4.9",
      importe:"$114.98",
      estatus:"Vigente"
    }
  ];


  constructor() { }


  getdataFondosPendiente(): FondosInversionPendientes[] {
    return this._dataFondosPendiente;
  }
}
