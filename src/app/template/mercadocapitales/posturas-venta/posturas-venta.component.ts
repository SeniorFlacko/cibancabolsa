import { Component, OnInit } from '@angular/core';
import { PosturasCompra } from '../../../models/index.models';
import { PosturasCompraService } from '../../../services/index.services';

@Component({
  selector: 'app-posturas-venta',
  templateUrl: './posturas-venta.component.html',
  styleUrls: ['./posturas-venta.component.css']
})
export class PosturasVentaComponent implements OnInit {
  displayedColumn=["precio","monto","valor"];
  dataRecientes:PosturasCompra[];
  constructor(private data: PosturasCompraService) { }

  ngOnInit() {
    this.dataRecientes=this.data.getDataOperaciones();
  }

}
