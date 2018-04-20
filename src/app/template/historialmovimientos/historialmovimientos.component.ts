import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

declare var $ : any;

@Component({
  selector: 'app-historialmovimientos',
  templateUrl: './historialmovimientos.component.html',
  styleUrls: ['./historialmovimientos.component.css']
})
export class HistorialmovimientosComponent implements OnInit {

  private historialForm: FormGroup;
  private selecFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createHistorialForm();
    this.createSelectForm();
    this.suscribeToChanges();
    
  }

  createHistorialForm() {
    this.historialForm = this.fb.group({
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
    });
  }

  createSelectForm(){
    this.selecFormGroup = new FormGroup({
      selectControl: new FormControl('x')
    });
  }

  suscribeToChanges(){
    this.select.valueChanges.subscribe(this.onSelectChanges);
  }

  onSelectChanges(value){
    console.log(value);
  }

  get select() { 
    return this.selecFormGroup.get('selectControl');
  }
}
