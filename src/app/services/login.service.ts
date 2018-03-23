import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LoginService {
  user: User;
  constructor() { }


  login( user:User ): Observable<boolean> {
    let response:boolean = false;
    if(user.name==="admin" && user.password==="123")
      response = true;

    return of(response);
  }

}
