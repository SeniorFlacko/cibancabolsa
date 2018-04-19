import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
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


  private formularioUno: FormGroup; 
  private formularioDos: FormGroup;
  private formularioTres: FormGroup;

  constructor(
    private fb: FormBuilder

  ) { 

   

  }

  ngOnInit() {
    
    //  setTimeout(() => {
//   $(document).ready(function(){
    
//     $('#exampleModal').modal('show');

//   });
//  }, 5000);
this.validarFormularioUno();
this.validarFormularioDos();
this.validarFormularioTres();
  }

  validarFormularioUno() {
    this.formularioUno = this.fb.group({
      emisoraUno: ['', [Validators.required] ],
      tipoOrdenUno: ['', [Validators.required] ],
      titulosUno: ['', [Validators.required] ],
      precioCompraUno: ['', [Validators.required] ]

    });
  }

  validarFormularioDos() {
    this.formularioDos = this.fb.group({
      reportesDos: ['', [Validators.required] ],
      plazoDos: ['', [Validators.required] ]

    });
  }

  validarFormularioTres() {
    this.formularioTres = this.fb.group({
      fondoTres: ['', [Validators.required] ],
      catidadinvertirTres: ['', [Validators.required] ]

    });
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
