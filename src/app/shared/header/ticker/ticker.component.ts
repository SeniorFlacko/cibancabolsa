import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ticker } from '../../../models/index.models';
import { TickerService } from '../../../services/index.services';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit {

  modelo$: Observable<Ticker>; 
  constructor(private values: TickerService) { }

  ngOnInit() {

    this.modelo$ = this.values.getValues();

  }

}
