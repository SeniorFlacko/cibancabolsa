import { Component, OnInit } from '@angular/core';
import { AuthService, ValuesTableService } from '../../services/index.services';
import { Valores } from '../../models/index.models';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modelo: Valores = {
    "cadcompra": "",
    "cadventa": "",
    "dolarbuy": "",
    "dolarsell": "",
    "dowjones": "",
    "eurcompra": "",
    "eurventa": "",
    "ipc": "",
    "nasdaq": ""
  };

  constructor(private auth: AuthService, private values:ValuesTableService) {    
   }

  ngOnInit() {

    this.values.getValues().subscribe(res=>{
      console.log(res);
      
    
      this.modelo = res;
      console.log(this.modelo);
      
      // console.log(this.modelo);
      
    });

    // this.modelo = this.values.getValues();
  }

   myFunction() {
    let x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  logout(){
    this.auth.logout();
  }

}
