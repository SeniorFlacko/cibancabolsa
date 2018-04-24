import { Versionable } from "../models/index.models";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

export abstract class GenericService<T extends Versionable> {
    constructor(protected http: Http, protected actionUrl:string){
    }
  
    protected getRequestOptions(): RequestOptions {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      return options;
    }
  
    protected convertData(response: Response){
      return response.json();
    }
  
    protected handleError(error: Response) {
      console.log(error.json());
    }
    
    public getURL( id?:string ): string {
  
      if (id != null){
        return environment.SERVER_URL + this.actionUrl + "/" + id;
      }
  
      return environment.SERVER_URL + this.actionUrl;
    }
  
    // getAll():Observable<T[]> {
    //   return this.http.get(this.actionUrl).map(resp=>resp.json() as T[]);
    // }
    // getOne(id:number):Observable<T> {
    //   return this.http.get(`${this.actionUrl}${id}`).map(resp=>resp.json() as T);
    // }
  
    getAllItems(onLoaded: (response: T[]) => void, onComplete?: () => void){
      const options = this.getRequestOptions();
      const data: Observable<T[]> = this.http.get(this.getURL(), options).map(this.convertData);
      data.subscribe(onLoaded, (error) => this.handleError(error) , onComplete);
    }
  
    getItem(id: string, onLoaded: (data: T) => void, onComplete?: () => void) {
      const options = this.getRequestOptions();
      const data: Observable<T> = this.http.get(this.getURL(id), options).map(this.convertData);
      data.subscribe(onLoaded, (error) => { this.handleError(error); }, onComplete);
    }
  
    createItem(item: T, onLoaded: (data: T) => void, onComplete?: () => void) {
      const options = this.getRequestOptions();
      const data: Observable<T> = this.http.post(this.getURL(), item, options).map(this.convertData);
      data.subscribe(onLoaded, (error) => { this.handleError(error); }, onComplete);
    }
  
    updateItem(item: T, onLoaded: (data: T) => void, onComplete?: () => void) {
      const options = this.getRequestOptions();
      const data: Observable<T> = this.http.put(this.getURL( item.id ), item, options).map(this.convertData);
      data.subscribe(onLoaded, (error) => { this.handleError(error); }, onComplete);
    }
  
  } 
  