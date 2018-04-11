import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-comprarvender',
  templateUrl: './comprarvender.component.html',
  styleUrls: ['./comprarvender.component.css']
})
export class ComprarvenderComponent implements OnInit {

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  capitales:boolean = true;
  dinero :boolean = false;
  inversion:boolean = false;

  constructor() { 

    

  }

  ngOnInit() {
//  setTimeout(() => {
//   $(document).ready(function(){
    
//     $('#exampleModal').modal('show');

//   });
//  }, 5000);
  }

  seleccionBotones(id:string){

    if(id == 'capitales'){
      this.capitales = true;
      this.dinero = false;
      this.inversion = false;
    }
    if(id == 'dinero'){
      this.capitales = false;
      this.dinero = true;
      this.inversion = false;
    }
    if(id == 'inversion'){
      this.capitales = false;
      this.dinero = false;
      this.inversion = true;
    }
  }

}
