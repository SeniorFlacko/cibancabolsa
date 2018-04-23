import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HistorialService } from '../../services/index.services';

declare var $ : any;

@Component({
  selector: 'app-historialmovimientos',
  templateUrl: './historialmovimientos.component.html',
  styleUrls: ['./historialmovimientos.component.css']
})
export class HistorialmovimientosComponent implements OnInit {

  private historialForm: FormGroup;
  private selecFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private hs: HistorialService) { }

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

  onSubmit(){
    let obj = this.historialForm.value;
    this.hs.sendMessage( obj );
  }

  get select() { 
    return this.selecFormGroup.get('selectControl');
  }
}
