import { Component, OnInit } from '@angular/core';
import { OperacionesRecientesTabla } from '../../../models/index.models';
import { OperacionesRecientesService } from '../../../services/index.services';


@Component({
  selector: 'app-operaciones-recientes-tabla',
  templateUrl: './operaciones-recientes-tabla.component.html',
  styleUrls: ['./operaciones-recientes-tabla.component.css']
})
export class OperacionesRecientesTablaComponent implements OnInit {
  displayedColumn=["precio","monto","valor"];
  dataRecientes:OperacionesRecientesTabla[];
  constructor(private data:OperacionesRecientesService) { }

  ngOnInit() {
    this.dataRecientes=this.data.getDataOperaciones();
  }

}
