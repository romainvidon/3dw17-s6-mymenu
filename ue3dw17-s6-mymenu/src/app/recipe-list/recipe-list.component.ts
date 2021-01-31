import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipeService: RecipeService) { }
  

  ngOnInit(): void {
    this.getRecipes();
  }
  getRecipes(): void{
    this.recipeService.getRecipes().subscribe(recipes => {this.recipes = recipes.data; console.log(recipes)});
  }

}
