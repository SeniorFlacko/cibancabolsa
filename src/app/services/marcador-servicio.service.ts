import { Injectable } from '@angular/core';
import { Marcador } from '../models/index.models';



@Injectable()
export class MarcadorServicioService {
  marcador:Marcador={
    id: "1", 
    liquido:"$38,746.23",
    undia:"$9,008.73",
    dosdias:"$12,846.88",
    total_portafolio:"$237,794.71",
    gran_total:"$276,541.00"
  }

  constructor() { }

  getMarcador():Marcador{
    return this.marcador;
  }

}
