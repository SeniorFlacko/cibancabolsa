import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slide-toogle',
  templateUrl: './slide-toogle.component.html',
  styleUrls: ['./slide-toogle.component.css']
})
export class SlideToogleComponent implements OnInit {
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
