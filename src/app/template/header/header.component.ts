import { Component, OnInit } from '@angular/core';
import { AuthService, ValuesTableService } from '../../services/index.services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dolarbuy: number;
  dolarsell:number;

  constructor(private auth: AuthService, private values:ValuesTableService) {

    this.dolarbuy = values.dolarbuy;
    this.dolarsell = values.dolarsell;

    console.log(this.dolarbuy);
    console.log(this.dolarsell);
    

   }

  ngOnInit() {

  }

  logout(){
    this.auth.logout();
  }

}
