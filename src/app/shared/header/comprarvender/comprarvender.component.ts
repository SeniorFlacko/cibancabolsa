import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm  } from '@angular/forms';
import * as $ from 'jquery';
import { ComprarVenderUnoModel, ComprarVenderDosModel } from '../../../models/index.models';
import { GenericService } from '../../../services/generic.service';
import { ComprarvenderunoService } from '../../../services/comprarvenderuno.service';
import { ComprarvenderdosService } from '../../../services/comprarvenderdos.service';
import { ModalConfirmacionComponent } from '../../../template/modal-confirmacion/modal-confirmacion.component';


@Component({
  selector: 'app-comprarvender',
  templateUrl: './comprarvender.component.html',
  styleUrls: ['./comprarvender.component.css']
})
export class ComprarvenderComponent implements OnInit, AfterViewInit {

  opciones = [
    {value: 'CEMEX', viewValue: 'CEMEX'},
    {value: 'TELMEX', viewValue: 'TELMEX'},
    {value: 'PEMEX', viewValue: 'PEMEX'}
  ];

  objetoUno: ComprarVenderUnoModel = {
    id: "1",
    emisora: "",
    precio_compra: "",
    titulos: "",
    tipo_orden: ""
  };

  objetoDos: ComprarVenderDosModel = {
    id: "1",
    reportes: "Privado",
    plazo: "220"
  };

  capitales:boolean = true;
  dinero :boolean = false;
  inversion:boolean = false;

  modal: boolean = false;

  res:boolean = true;

  private formularioUno: FormGroup; 
  private formularioDos: FormGroup;
  private formularioTres: FormGroup;

  @ViewChild(ModalConfirmacionComponent) modal_confirmacion: ModalConfirmacionComponent;
  

  constructor(
    
    private fb: FormBuilder,
    private servicio: ComprarvenderunoService,
    private servicioDos: ComprarvenderdosService

  ) {}

  ngOnInit() {

    this.validarFormularioUno();
    this.validarFormularioDos();
    this.validarFormularioTres();
  
  }

  ngAfterViewInit(): void {
    this.modal_confirmacion.onConfirmacion = () => {
      let flag = 0;
      if(this.capitales){
        let objetoUno = this.formularioUno.value;
        this.servicio.createItem(objetoUno,()=>{
          this.res = false;
          let flag = 1;
          console.log("ERROR");
        },(data:ComprarVenderUnoModel)=>{
          console.log("LOADED");
        },()=>{
          this.res = true;
          let flag = 1;
          console.log("COMPLETE");
        }); 
        return this.res;
      }
      
      // if(this.dinero){
      //   let objetoDos = this.formularioDos.value;
      //   this.servicioDos.createItem(objetoDos, res => console.log(res));
      //   return true;
      // }
      // return false;
    }
  }

  // validarToken(token: string){

  //   if(token == "1234"){
  //     if( this.capitales){
  //       this.guardarUno(this.objetoUno);
  //       return true;
  //     }
  //     // }if( this.dinero){
  //     //   this.guardardos(this.objetoUno);
  //     //   return true;
  //     // }if( this.inversion){
  //     //   this.guardarUno(this.objetoUno);
  //     //   return true;
  //     // }
      
  //   }
  //   return false;
    
  // }

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
      reportes: ['', [Validators.required] ],
      plazo: ['', [Validators.required] ]

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

  guardarUno(){
    this.modal_confirmacion.show();
    // let objetoUno = this.formularioUno.value;
    //this.servicio.createItem(objetoUno, res => console.log(res));
  }

  guardarDos(){
    // let objetoDos = this.formularioDos.value;
    // this.servicioDos.createItem(objetoDos, res => console.log(res));
    this.modal_confirmacion.show();
  }



  

}
