import { Component, OnInit } from '@angular/core';
import { FondoInversion } from '../../models/index.models';
import { FondosinversionService } from '../../services/index.services';


@Component({
  selector: 'app-fondoinversion',
  templateUrl: './fondoinversion.component.html',
  styleUrls: ['./fondoinversion.component.css']
})
export class FondoinversionComponent implements OnInit {

  displayedFondosColumn = ['fondo', 'serie', 'operar', 'clasificacion','liquidacion','horizonte','maxima','calificacion','horario'];
  dataInversion:FondoInversion[];


  constructor(
    private fondo_inversion_service:FondosinversionService
  ) { }

  ngOnInit() {
    this.dataInversion =  this.fondo_inversion_service.getDataFondoInversion();
  }

}
