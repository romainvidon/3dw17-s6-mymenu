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
  getRecipe(id: string){
    return this.http.get<RecipeLink>(apiURL + this.url + "/" +id, httpOptions);
  }
  addLink(recipe: RecipeLink): Observable<RecipeLink>{
    return this.http.post<RecipeLink>(apiURL + this.url, recipe, httpOptions);
  }
  editLink(recipe: RecipeLink): Observable<RecipeLink>{
    return this.http.put<RecipeLink>(apiURL + this.url + "/"+ recipe._id, recipe, httpOptions);
  }
}
