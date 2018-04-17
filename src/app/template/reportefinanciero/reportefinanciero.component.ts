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
    this.chart = new Chart(document.getElementById("myChart"),
      {"type":"line",
        "data":{
          "labels":["January","February","March","April","May","June","July",65,59,80,81,56,55,40,65,59,80,81,56,55,40,65,59,80,81,56,55,40],
          "datasets":[
              {
              "label":"My First Dataset",
              "data":[65,59,80,81,56,55,40,65,59,80,81,56,55,40,65,59,80,81,56,55,40,65,59,80,81,56,55,40,65,59,80,81,56,55,40,65,59,80,81,56,55,40],
              "fill":false,
              "borderColor":"rgb(75, 192, 192)",
              "lineTension":0.1
              }
            ]
        },
        "options":{}
      }
      );
  }
}
