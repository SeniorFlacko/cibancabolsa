import { Component, OnInit } from '@angular/core';
import { Valores } from '../../../models/index.models';
import { ValuesTableService } from '../../../services/index.services';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit {
  modelo: Valores = {
    "cadcompra": 666666,
    "cadventa": 777777,
    "dolarbuy": 18,
    "dolarsell": 20,
    "dowjones": 22222,
    "eurcompra": 444444,
    "eurventa": 555555,
    "ipc": 123456,
    "nasdaq": 333333
  };
  constructor(private values:ValuesTableService) { }

  ngOnInit() {
    this.values.getValues().subscribe(res=>{
      this.modelo = res;
    });
  }

}
