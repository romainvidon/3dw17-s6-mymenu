import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeLink } from 'src/models/recipe-link.model';
import { apiURL, httpOptions } from './config';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url: string = "/recipes";
  constructor(private http: HttpClient) { }
  getRecipes(){
    
  }
  addLink(recipe: RecipeLink): Observable<RecipeLink>{
    return this.http.post<RecipeLink>(apiURL + this.url, recipe, httpOptions);
  }
}
