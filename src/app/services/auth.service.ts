import { Injectable } from '@angular/core';
// import { User,Token } from '../../models/index.models';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import { SessionService } from './session.service';
import { Router } from '@angular/router';
import { User, Token } from '../models/index.models';

@Injectable()
export class AuthService {
  user:User;
  constructor(private session:SessionService,private router:Router) { 

  }


  isAuthenticated(){
    if (this.session.getUser()!=null){
      return true;
    }
    return false;
  }


  login( user:User ): Observable<boolean> {
    let response:boolean = false;
    if(user.name==="admin" && user.password==="123"){
      response = true;
      this.user = user;
    }

    return of(response);
  }

  aproveToken( token:Token ): Observable<boolean> {
    let response:boolean = false;
    if(token.value==="12345678"){
      response = true;
      this.session.setUser(this.user);
    }
    return of(response).delay(1500);
  }

  logout(){
    this.session.clearUser();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    console.log('bye');
    localStorage.clear();    
  }

}
