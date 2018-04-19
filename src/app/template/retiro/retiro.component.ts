import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.scss']
})
export class RetiroComponent implements OnInit {

  pantalla: string;
  retiroForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createRetiroForm();
    this.pantalla = 'Seleccionar';
  }

  createRetiroForm() {
    this.retiroForm = this.fb.group({
      cuenta: ['', [Validators.required]],
      importe: ['', Validators.required ]
    });
  }

  onRetiroSubmit(){
    this.pantalla='Verificar';
  }

  retiroFormCancel(){
    this.retiroForm.reset();
  }


}
