import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var $ : any;
@Component({
  selector: 'app-mercadodinero',
  templateUrl: './mercadodinero.component.html',
  styleUrls: ['./mercadodinero.component.css']
})
export class MercadodineroComponent implements OnInit {
  private mercadoDineroForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createLoginForm();
    $(document).ready(function(){
      $(".miboton").click(function(){
        alert('Mi boton');
      });
    });
  }

  createLoginForm() {
    this.mercadoDineroForm = this.fb.group({
      reportes: ['', [Validators.required] ],
      monto: ['', [Validators.required] ],
      plazo: ['', [Validators.required] ],
    });
  }

  onSubmit(){
    $('#miModal').modal('show');
  }

  showDynamicModal(){
    $('#miModal').modal('hide');
    $('#contrasenia-dinamica').modal('show');
  }

  showSuccessModal(){
    $('#contrasenia-dinamica').modal('hide');
    $('#envio-exitoso').modal('show');
  }
}
