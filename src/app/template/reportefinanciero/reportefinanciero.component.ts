import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reportefinanciero',
  templateUrl: './reportefinanciero.component.html',
  styleUrls: ['./reportefinanciero.component.css']
})
export class ReportefinancieroComponent implements OnInit {
  chart = [];

  constructor() {
  }

  ngOnInit() {
    this.renderGraphic();
  }


  renderGraphic() {
    var chart = new Chart(document.getElementById("myChart"),
      {"type":"line",
        "data":{
          "labels":["January","February","March","April","May","June","July",65,59,80,81,56,55,40,65,59,80,81,56,55,40,65,59,80,81,56,55,40],
          "datasets":[
              {
              "label":"My First Dataset",
              "data":[6500,5900,8000,8100,5600,5500,4000,6500,5900,8000,8100,5600,5500,4000,6500,5900,8000,8100,5600,5500,4000,6500,65900,8000,8100,5600,5500,4000,6500,5900,8000,8100,5600,5500,4000,6500,5900,8000,8100,5600,5500,4000],
              "fill":false,
              "borderColor":"rgb(79, 146, 214)",
              "lineTension":0.1
              }
            ]
        },
        "options":{}
      }
      );
  }
}
