import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  constructor() { }

  getUser(){
    let user = localStorage.getItem('currentUser'); 
    return user;
  }

  setUser(user){
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  clearUser(){
    localStorage.removeItem('currentUser');
  }

}
