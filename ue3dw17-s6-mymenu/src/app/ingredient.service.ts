import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiURL,httpOptions } from './config';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  urlRoute = "/ingredients";

  constructor(private http: HttpClient) { }

  getIngredients(): Observable<any>{
    return this.http.get<any>(apiURL + this.urlRoute, {responseType: "json"});
  }
  getIngredient(id:string){
    return this.http.get<Ingredient>(apiURL + this.urlRoute + "/" +id, httpOptions);
  }
  addIngredients(ingredient: Ingredient): Observable<Ingredient>{
    return this.http.post<Ingredient>(apiURL + this.urlRoute, ingredient, httpOptions);
  }
  updateIngredients(ingredient: Ingredient): Observable<Ingredient>{
    return this.http.put<Ingredient>(apiURL + this.urlRoute + "/"+ ingredient._id, ingredient, httpOptions);
  }
}
