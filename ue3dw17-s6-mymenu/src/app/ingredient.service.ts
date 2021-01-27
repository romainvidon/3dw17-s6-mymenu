import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from './config';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  urlRoute = "/ingredients"


  constructor(private http: HttpClient) { }

  getIngredients(): Observable<any>{
    console.log(apiURL + this.urlRoute);
    return this.http.get<any>(apiURL + this.urlRoute, {responseType: "json"});
  }
}
