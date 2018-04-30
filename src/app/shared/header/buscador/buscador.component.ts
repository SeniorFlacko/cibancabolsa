import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  private oculto: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {

    this.router.events
      .filter( (rtr:NavigationEnd) => rtr instanceof NavigationEnd)
      .subscribe((rtr:NavigationEnd) => {
        if (rtr.url == '/capitales' || 
            rtr.url == '/dinero' ||
            rtr.url == '/inversion'
        ) {
          this.oculto = false;
        }
        else{
          this.oculto = true;
        }
        
      });

  }

}
