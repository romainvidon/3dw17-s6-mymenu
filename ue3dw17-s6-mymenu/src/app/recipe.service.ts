import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeLink } from 'src/models/recipe-link.model';
import { apiURL, httpOptions } from './config';
import { Recipe } from 'src/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url: string = "/recipes";
  constructor(private http: HttpClient) { }
  getRecipes(){
    return this.http.get<any>(apiURL + this.url, httpOptions);
  }
  getRecipe(id: string){
    return this.http.get<Recipe>(apiURL + this.url + "/" +id, httpOptions);
  }
  addLink(recipe: RecipeLink): Observable<RecipeLink>{
    return this.http.post<RecipeLink>(apiURL + this.url, recipe, httpOptions);
  }
  editLink(recipe: RecipeLink): Observable<RecipeLink>{
    return this.http.put<RecipeLink>(apiURL + this.url + "/"+ recipe._id, recipe, httpOptions);
  }
}
