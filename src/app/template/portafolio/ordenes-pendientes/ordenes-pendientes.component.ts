import { Component, OnInit,Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ordenes-pendientes-tabla',
  templateUrl: './ordenes-pendientes.component.html',
  styleUrls: ['./ordenes-pendientes.component.css']
})
export class OrdenesPendientesComponent implements OnInit,AfterViewInit {
  @Input() title: string = "Título";
  @Input() numero: string;

  ordenes: boolean = false;
  hid:string
  constructor() {}

  ngOnInit() {
    this.hid = "#" + this.numero;
  }

  toggleOrdenes(){
    this.ordenes = !this.ordenes;
  }

  ngAfterViewInit(){
    
  }

}
