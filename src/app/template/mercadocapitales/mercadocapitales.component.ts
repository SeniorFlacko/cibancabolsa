import { Component, OnInit,ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { MercadocapitalesservicioService } from '../../services/index.services';
import { MercadoCapitales } from '../../models/index.models';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-mercadocapitales',
  templateUrl: './mercadocapitales.component.html',
  styleUrls: ['./mercadocapitales.component.css']
})
export class MercadocapitalesComponent implements OnInit {
  displayedColumns = ['emisora', 'precio_cierre', 'precio_ultimo', 'precio_variacion','precio_compra','precio_venta','volumen','maximo','minimo','favorita'];
  dataCapitales:MercadoCapitales[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private  dataCapService:MercadocapitalesservicioService) { }

  ngOnInit() {
    this.getDataCapitales();
    this.renderGraphic();
  }

  getDataCapitales(){
    this.dataCapService.getMercadoCapitalesData().subscribe(response=>{
      this.dataCapitales=response;
    });
  }

  toggle(orden:MercadoCapitales){
    this.dataCapitales.forEach( capital => {
      capital.id === orden.id ? capital.favorita = !capital.favorita : null;
    });
    this.dataCapService.updateRegistro(orden).subscribe();
  }

  star_icon(star:boolean): string{
    return star ?  "star" : "star_border";
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
              "fill":true,
              "backgroundColor":"rgb(70,70,70)",
              "borderColor":"rgb(125, 125, 125)",
              "lineTension":0.8
              }
            ]
        },
        "options":{}
      }
      );
  }



}
