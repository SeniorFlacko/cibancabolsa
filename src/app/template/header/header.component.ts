import { Component, OnInit } from '@angular/core';
import { AuthService, ValuesTableService } from '../../services/index.services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private values:ValuesTableService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}
