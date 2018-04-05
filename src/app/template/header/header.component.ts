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
    "cadcompra": 666666,
    "cadventa": 777777,
    "dolarbuy": 18,
    "dolarsell": 20,
    "dowjones": 22222,
    "eurcompra": 444444,
    "eurventa": 555555,
    "ipc": 123456,
    "nasdaq": 333333
  };

  constructor(private auth: AuthService, private values:ValuesTableService) {
   }

  ngOnInit() {

    this.values.getValues().subscribe(res=>{console.log(res)

      this.modelo = res;
      console.log(this.modelo);
    });
  }

  myFunction2() {
    let x = document.getElementById('myTopnav');
    if (x.className === 'topnav responsive') {
      x.className= 'topnav';
    }
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
