import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ingredient } from 'src/models/ingredient.model';
import { IngredientService } from '../ingredient.service';
import { RecipeService } from '../recipe.service';
import { RecipeLink } from 'src/models/recipe-link.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipe-add-link',
  templateUrl: './recipe-add-link.component.html',
  styleUrls: ['./recipe-add-link.component.scss']
})
export class RecipeAddLinkComponent implements OnInit {
  
  recipe: RecipeLink = {"name":"","type":"link","_id":null,"url":""};

  ingredients = new FormControl();
  ingredientsList: Ingredient[];
  constructor(private recipeService: RecipeService, private _snackBar: MatSnackBar) { }
  
  ngOnInit(): void {

    //this.getIngredients()
  }

  /*getIngredients(): void {
    this.ingredientService.getIngredients().subscribe(ing =>this.ingredientsList = ing.data ?? [{_id:0,name:"non"}]);
  }*/
  add():void{
    this.recipeService.addLink(this.recipe).subscribe(res => {
      if(res){
        this._snackBar.open("Recette ajoutée avec succès : " + res.name);
      } else {
        console.log("erreur");
      }
    });
  }

  
}
