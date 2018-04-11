import { Component, OnInit } from '@angular/core';
import { MercadoCapitalesDolaresService } from '../../../../services/index.services';
import { CapitalDolar } from '../../../../models/index.models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tabla-mercado-capitales-usd',
  templateUrl: './tabla-mercado-capitales-usd.component.html',
  styleUrls: ['./tabla-mercado-capitales-usd.component.css']
})
export class TablaMercadoCapitalesUsdComponent implements OnInit {
  dataCapitalesUSD: Observable<CapitalDolar[]>;
  displayedCapitalesColumn = ['emisora','titulos','promedio','total','variacion','precio','valuacion'];
  constructor(private capitalUsd: MercadoCapitalesDolaresService) { }

  ngOnInit() {
    this.dataCapitalesUSD = this.capitalUsd.getCapitalesUSD();
  }

}
