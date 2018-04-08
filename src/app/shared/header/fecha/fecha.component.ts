import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-fecha',
  template: `
  <p class="date">{{ today }}</p>
  `,
  styles: [`
    .date{
      font-size: 13px;
      color: #5c5c5c;
      margin: 0;
      padding: 0 10px;
    }
  `,
  ]
  })
export class FechaComponent implements OnInit {

  today: any;
  constructor() { }

  ngOnInit() {
    this.today = moment();
    this.today.locale('es');
    this.today = this.today.format('dddd, DD MMMM [de] YYYY [|] H:mm:ss [hrs.]');
  }

}
