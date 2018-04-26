import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { ComprarVenderDosModel } from '../models/index.models';
import { Http } from '@angular/http';

@Injectable()
export class ComprarvenderdosService extends GenericService<ComprarVenderDosModel>{

  constructor(http: Http) {
    super(http, "/comprarvenderdos.json");
  }

}
