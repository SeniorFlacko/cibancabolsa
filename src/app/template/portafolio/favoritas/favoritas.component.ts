import { Component, OnInit } from '@angular/core';
import { Emisora } from '../../../models/emisora';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css']
})
export class FavoritasComponent implements OnInit {
  displayedFavoritasColumn=['emisora','ultimo_precio','cambio','cambio_en_porcentaje']
  dataFavoritas:Emisora[]=[
    {
      emisora:'CEMEX',
      ultimo_precio:'$234.67',
      cambio:'+1.01',
      cambio_porcentaje:'0.012%'
    },
    {
      emisora:'CIMEX',
      ultimo_precio:'$134.67',
      cambio:'-1.01',
      cambio_porcentaje:'0.112%'
    },
    {
      emisora:'TELMEX',
      ultimo_precio:'$934.67',
      cambio:'+6.01',
      cambio_porcentaje:'5.127%'
    }
  ]
  constructor() { }


  ngOnInit() {
  }

}
