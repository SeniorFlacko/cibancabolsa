import { Injectable } from '@angular/core';
import { Fondos } from '../../../models/index.models';


@Injectable()
export class FondoInversionService {
  dataFondos:Fondos[] =[
    {
    fondo:"CIGUB",
    serie:"1234",
    titulos:"500",
    precio_actual:"$2.38",
    valuacion:"$342.564"
    },
    {
      fondo:"CIBOLSA",
      serie:"5678",
      titulos:"100",
      precio_actual:"$12.38",
      valuacion:"$1342.564"
    }
  ]

  constructor() { }

  getDataFondos():Fondos[]{
    return this.dataFondos;
  }

}
