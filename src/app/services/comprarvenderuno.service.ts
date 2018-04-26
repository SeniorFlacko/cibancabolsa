import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { ComprarVenderUnoModel } from '../models/index.models';
import { Http } from '@angular/http';


@Injectable()
export class ComprarvenderunoService extends GenericService<ComprarVenderUnoModel> {
  
  constructor(http: Http) {
    super(http, "/comprarvenderuno.json");
  }

}
