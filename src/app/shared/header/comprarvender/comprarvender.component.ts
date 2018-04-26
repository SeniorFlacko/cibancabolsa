import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm  } from '@angular/forms';
import * as $ from 'jquery';
import { ComprarVenderUnoModel } from '../../../models/index.models';
import { GenericService } from '../../../services/generic.service';
import { ComprarvenderunoService } from '../../../services/comprarvenderuno.service';


@Component({
  selector: 'app-comprarvender',
  templateUrl: './comprarvender.component.html',
  styleUrls: ['./comprarvender.component.css']
})
export class ComprarvenderComponent implements OnInit {

  foods = [
    {value: 'CEMEX', viewValue: 'Steak'},
    {value: 'TELMEX', viewValue: 'Pizza'},
    {value: 'PEMEX', viewValue: 'Tacos'}
  ];

  objeto: ComprarVenderUnoModel = {
    id: "1",
    emisora: "",
    precio_compra: "",
    titulos: "",
    tipo_orden: ""
  };

  capitales:boolean = true;
  dinero :boolean = false;
  inversion:boolean = false;

  modal: boolean = false;

  private formularioUno: FormGroup; 
  private formularioDos: FormGroup;
  private formularioTres: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: ComprarvenderunoService
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

    this.modal = true;

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

  guardar(objeto: ComprarVenderUnoModel ){

    this.servicio.createItem(objeto, res => console.log(res));
  }

 

}
