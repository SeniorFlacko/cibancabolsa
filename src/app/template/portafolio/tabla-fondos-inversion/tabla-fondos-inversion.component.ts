import { Component, OnInit } from '@angular/core';
import { Fondos } from '../../../models/fondos';
import { FondoInversionService } from '../../../services/index.services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tabla-fondos-inversion',
  templateUrl: './tabla-fondos-inversion.component.html',
  styleUrls: ['./tabla-fondos-inversion.component.css']
})
export class TablaFondosInversionComponent implements OnInit {
  displayedFondosColumn=['fondo','serie','titulos','precio_actual','valuacion'];
  dataFondos$: Observable<Fondos[]>;
  constructor(private fondos_service:FondoInversionService ) { }
  
  ngOnInit() {
    this.dataFondos$ = this.fondos_service.getAllItems(response => response);
  }

}
