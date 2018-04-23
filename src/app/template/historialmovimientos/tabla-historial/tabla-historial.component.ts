import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../../../services/index.services';

@Component({
  selector: 'app-tabla-historial',
  templateUrl: './tabla-historial.component.html',
  styleUrls: ['./tabla-historial.component.css']
})
export class TablaHistorialComponent implements OnInit {


  constructor(private hs: HistorialService) { }

  ngOnInit() {
    this.hs.historial$.subscribe(data => console.log(data));
  }

}
