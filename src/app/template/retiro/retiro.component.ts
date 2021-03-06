import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare var $ : any;

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.scss']
})
export class RetiroComponent implements OnInit {

  pantalla: string;
  private retiroForm: FormGroup;
  private ok = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createRetiroForm();
    this.showScreen('Seleccionar');
  }

  createRetiroForm() {
    this.retiroForm = this.fb.group({
      cuenta: ['', [Validators.required]],
      importe: ['', Validators.required ]
    });
  }

  onRetiroSubmit(){
    this.showScreen('Verificar');
  }

  cancelar(){
    this.retiroForm.reset();
    this.showScreen('Seleccionar');
  }

  cancel(){
    this.retiroForm.reset();
    this.showScreen('Seleccionar');
  }


  showScreen(pantalla: string){
    this.pantalla = pantalla;
  }

  get cuenta() { 
    return this.retiroForm.get('cuenta').value; 
  }

  get importe() { 
    return this.retiroForm.get('importe').value; 
  }

  showTokenValidate(){
    $('#contraseniaDinamica').modal('show');
  }

  onTokenValidate(){
    this.showScreen('Comprobar');
    $('#contraseniaDinamica').modal('hide');
  }

}
