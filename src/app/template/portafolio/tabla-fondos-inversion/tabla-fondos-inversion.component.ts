import { Component, OnInit } from '@angular/core';
import { Fondos } from '../../../models/fondos';

@Component({
  selector: 'app-tabla-fondos-inversion',
  templateUrl: './tabla-fondos-inversion.component.html',
  styleUrls: ['./tabla-fondos-inversion.component.css']
})
export class TablaFondosInversionComponent implements OnInit {
  displayedFondosColumn=['fondo','serie','titulos','precio_actual','valuacion']
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

  ngOnInit() {
   
  }

}
