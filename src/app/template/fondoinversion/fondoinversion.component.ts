import { Component, OnInit } from '@angular/core';
import { FondoInversion } from '../../models/index.models';
import { FondosinversionService } from '../../services/index.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-fondoinversion',
  templateUrl: './fondoinversion.component.html',
  styleUrls: ['./fondoinversion.component.css']
})
export class FondoinversionComponent implements OnInit {

  displayedFondosColumn = ['fondo', 'serie', 'operar', 'clasificacion','liquidacion','horizonte','maxima','calificacion','horario'];
  dataInversion: Observable<FondoInversion[]>;

  private fondoinversion1Form: FormGroup;
  private contradinamicafondoinversion: FormGroup;

  constructor(
    private fondo_inversion_service:FondosinversionService,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.validarForm1();
    this.contraDinamicaDondoInversion();
    this.dataInversion =  this.fondo_inversion_service.getValues();

  }

  validarForm1() {
    this.fondoinversion1Form = this.fb.group({
      montoInvertir: ['', [Validators.required] ]
    });
  }

  contraDinamicaDondoInversion()
  {
    this.contradinamicafondoinversion = this.fb.group({
      token: ['', [Validators.required] ]
    });
  }

}
