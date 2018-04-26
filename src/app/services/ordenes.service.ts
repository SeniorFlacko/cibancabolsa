import { Injectable } from '@angular/core';
import { Orden } from '../models/index.models';
import { GenericService } from './generic.service';
import { Http } from '@angular/http';

@Injectable()
export class OrdenesService extends GenericService<Orden>{


  constructor(http: Http) {
    super(http,"/ordenes.json");
  }

}
