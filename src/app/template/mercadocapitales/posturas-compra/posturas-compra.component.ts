import { Component, OnInit } from '@angular/core';
import {PosturasCompra} from "../../../models/index.models";
import {PosturasCompraService} from "../../../services/index.services";

@Component({
  selector: 'app-posturas-compra',
  templateUrl: './posturas-compra.component.html',
  styleUrls: ['./posturas-compra.component.css']
})
export class PosturasCompraComponent implements OnInit {
  displayedColumn=["precio","monto","valor"];
  dataRecientes:PosturasCompra[];
  constructor(private data:PosturasCompraService) { }

  ngOnInit() {
    this.dataRecientes=this.data.getDataOperaciones();
  }

}
