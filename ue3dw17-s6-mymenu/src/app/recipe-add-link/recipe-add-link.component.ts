import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ingredient } from 'src/models/ingredient.model';
import { IngredientService } from '../ingredient.service';
import { RecipeService } from '../recipe.service';
import { RecipeLink } from 'src/models/recipe-link.model';

@Component({
  selector: 'app-recipe-add-link',
  templateUrl: './recipe-add-link.component.html',
  styleUrls: ['./recipe-add-link.component.scss']
})
export class RecipeAddLinkComponent implements OnInit {
  
  ingredients = new FormControl();
  ingredientsList: Ingredient[];
  constructor(private recipeService: RecipeService) { }
  
  ngOnInit(): void {
    //this.getIngredients()
  }

  /*getIngredients(): void {
    this.ingredientService.getIngredients().subscribe(ing =>this.ingredientsList = ing.data ?? [{_id:0,name:"non"}]);
  }*/
  add(name:string, link: string):void{
    let recipe: RecipeLink = {"_id": null,"name":name,"url":link,"type":"link"};
    this.recipeService.addLink(recipe).subscribe();
    console.log(name);
    console.log(link);
  }
}
