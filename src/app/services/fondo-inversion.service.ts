import { Injectable } from '@angular/core';
import { Fondos } from '../models/index.models';
import { Http } from '@angular/http';
import { GenericService } from './generic.service';



@Injectable()
export class FondoInversionService extends GenericService<Fondos>{
  constructor(http: Http) {
    super(http,'/fondoinversionportafolio.json');
  }
}
