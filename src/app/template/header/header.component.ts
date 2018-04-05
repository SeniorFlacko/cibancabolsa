import { Component, OnInit } from '@angular/core';
import { AuthService, ValuesTableService } from '../../services/index.services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dolarbuy: any;
  dolarsell: any;
  ipc: any;
  dowJones: any;
  nasdaq: any;
  eurcompra: any;
  eurventa: any;
  cadcompra:any;
  cadventa:any;

  constructor(private auth: AuthService, private values:ValuesTableService) {
   }

  ngOnInit() {

    this.values.getValues().subscribe(res=>{console.log(res)

      this.dolarbuy = res.usd.compra;
      this.dolarsell = res.usd.venta;
      this.ipc = res.ipc;
      this.dowJones = res.dowjones;
      this.nasdaq = res.nasdaq;
      this.eurcompra = res.eur.compra;
      this.eurventa = res.eur.venta;
      this.cadcompra = res.cad.compra;
      this.cadventa = res.cad.venta;


    });
  }

   myFunction(){
    let x = document.getElementById('myTopnav');
    if (x.className === 'topnav'){
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  myFunction2(){
    let x = document.getElementById('myTopnav');
    if (x.className === 'topnav responsive'){
      x.className += 'topnav';
    }
  }


  logout(){
    this.auth.logout();
  }
}
