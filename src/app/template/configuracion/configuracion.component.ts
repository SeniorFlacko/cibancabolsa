import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfiguracionService } from '../../services/index.services';
import { Configuracion } from '../../models/index.models';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {


  private configuracion; 

  constructor(private configuracion_service: ConfiguracionService) { }

  ngOnInit() {
   this.configuracion_service.getValues().subscribe(res => {
    this.configuracion = res;
    console.log(this.configuracion);
    console.log(this.configuracion[0].sms);
    });
    
  }

  
}
