import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  chart = [];
  constructor() { }

  ngOnInit() {
    this.renderGraphic();
  }


  renderGraphic(){
    this.chart = new Chart('myChart',{
      type: 'line',
      data: {
          labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,61,7,18,19,20,21,22,23,2,4,25,26,27,28,29,30],
          datasets: [{
              label: 'Valor monetario',
              data: [3200, 3900, 4000, 6000, 3300, 3200,4100,5000,6000,7200,8000,5000,3000,5600,9000,7800,5800,3000,5000,4020,7040,8200,9040,5040,3040,2100,7030,4500,4400,8040,9400,3400],
              backgroundColor: [
                  'rgba(204, 230, 217, .8)'
              ],
              borderColor: [
                  'rgba(206,229,217,1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                      
                  }
              }]
          },
          elements:{
            line:{
              tension:0
            }
          }

      }
    });
  }

}
