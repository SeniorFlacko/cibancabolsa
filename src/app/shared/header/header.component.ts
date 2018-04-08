import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/index.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) {
   }

  ngOnInit() {
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
