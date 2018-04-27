import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { MercadocapitalesservicioService } from '../../services/index.services';
import { MercadoCapitales } from '../../models/index.models';
import { Chart } from 'chart.js';
import { ModalConfirmacionComponent } from '../modal-confirmacion/modal-confirmacion.component';
declare var $ : any;

@Component({
  selector: 'app-mercadocapitales',
  templateUrl: './mercadocapitales.component.html',
  styleUrls: ['./mercadocapitales.component.css']
})
export class MercadocapitalesComponent implements OnInit, AfterViewInit {

  displayedColumns = ['emisora', 'precio_cierre', 'precio_ultimo', 'precio_variacion','precio_compra','precio_venta','volumen','maximo','minimo','favorita'];
  dataCapitales:MercadoCapitales[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(ModalConfirmacionComponent) confirmar:ModalConfirmacionComponent;
  @ViewChild(ModalConfirmacionComponent) modal_confirmacion: ModalConfirmacionComponent;


  constructor(private  dataCapService:MercadocapitalesservicioService) { }

  ngOnInit() {
    this.getDataCapitales();
    this.renderGraphic();
  }

  ngAfterViewInit(): void {
    this.modal_confirmacion.functionValidate = this.validarToken;
  }

  validarToken = (token: string) => {
    if (token=="123") {
      return true;
    }
    return false;
  };

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
          "labels":[2301,2724,2802,5753,10283,11455,11828,12156,12336,14306,16629,19277,20343,23867,24450,25927,25964,32070,32994,40106,41908,42532,43875,44917,47932,48124,48385,49924,51776,53118,53360,54371,54429,55377,55803,56195,58392,58905,58911,62839,63272,66760],
          "datasets":[
              {
              "label":"My First Dataset",
              "data":[746,
                2287,
                4011,
                7153,
                7447,
                7683,
                9168,
                11638,
                12486,
                12796,
                13255,
                15525,
                15632,
                17017,
                17290,
                17311,
                18044,
                18479,
                22488,
                22599,
                22849,
                23492,
                24946,
                26751,
                27249,
                27931,
                30497,
                32741,
                35862,
                39463,
                39949,
                43180,
                44346,
                50720,
                52540,
                53156,
                54216,
                54830,
                55827,
                56565,
                59816,
                59817
              ],
              "fill":true,
              "backgroundColor":"rgb(70,70,70)",
              "borderColor":"rgb(125, 125, 125)",
              "lineTension":0.8
              }
            ]
        },
        "options":{
				scales: {
					xAxes: [{
						type: 'time',
						distribution: 'series',
						ticks: {
							source: 'labels'
						}
					}],
					/*yAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'Closing price ($)'
						}
					}]*/
				}
			}
      }
      );
  }

  confirmarModal(){
    $("#modal_mercado").modal("hide");
    this.confirmar.show();
  }

  modalEmisora(){
    $("#modal_mercado").modal("show");
  }

  modal_tablas(){
    $("#modal_tablas").modal("show");
    $("#modal_mercado").modal("hide");
  }

  regresar(){
    $("#modal_tablas").modal("hide");
    $("#modal_mercado").modal("show");
  }

  onSubmit(){
    this.modal_confirmacion.show();
  }

}
