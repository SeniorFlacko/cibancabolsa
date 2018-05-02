import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalConfirmacionComponent } from '../modal-confirmacion/modal-confirmacion.component';
declare var $ : any;

@Component({
  selector: 'app-mercadodinero',
  templateUrl: './mercadodinero.component.html',
  styleUrls: ['./mercadodinero.component.css']
})
export class MercadodineroComponent implements OnInit, AfterViewInit  {
  
  private mercadoDineroForm: FormGroup;
  @ViewChild(ModalConfirmacionComponent) modal_confirmacion: ModalConfirmacionComponent;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createLoginForm();
    // $(document).ready(function(){
    //   $(".miboton").click(function(){
    //     alert('Mi boton');
    //   });
    // });
  }

  ngAfterViewInit() {
    this.modal_confirmacion.functionValidate = this.validarToken;
    this.modal_confirmacion.onConfirmacion = this.sendInfo;
  }

  sendInfo(): boolean{
    //TO-DO: Call To Service and return true if response was succesfully or false if response failed.
    let response = true; 
    if (response) {
      return true;
    }
    else{
      return false;
    }
  }


  validarToken = (token: string) => {
    if (token=="123") {
      return true;
    }
    return false;
  };

  createLoginForm() {
    this.mercadoDineroForm = this.fb.group({
      reportes: ['', [Validators.required] ],
      monto: ['', [Validators.required] ],
      plazo: ['', [Validators.required] ],
    });
  }

  onSubmit(){
    this.modal_confirmacion.show();
  }
  
}
