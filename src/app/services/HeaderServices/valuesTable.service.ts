import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ValuesTableService {
  constructor(private http: Http) {

  }

  getValues(){
    let URL= "https://cicasabolsa.firebaseio.com/valores.json";
    let headers = new Headers({'Content-Type':'application/json'});
    return this.http.get(URL).map(res=>{return res.json()});
  }

}
