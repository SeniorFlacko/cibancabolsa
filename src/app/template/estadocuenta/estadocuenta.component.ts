import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-estadocuenta',
  templateUrl: './estadocuenta.component.html',
  styleUrls: ['./estadocuenta.component.css']
})
export class EstadocuentaComponent implements OnInit {

  private formEstadoCuenta: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.validarEstadoCuenta();


  }



  validarEstadoCuenta(){
    this.formEstadoCuenta = this.fb.group({
      buscarEstadoCuenta: ['', [Validators.required] ]
    });
  }

}
