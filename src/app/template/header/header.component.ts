import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/index.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}
