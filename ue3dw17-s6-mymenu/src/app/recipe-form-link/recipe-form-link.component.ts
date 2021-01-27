import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ingredient } from '../../models/ingredient.model'
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-recipe-form-link',
  templateUrl: './recipe-form-link.component.html',
  styleUrls: ['./recipe-form-link.component.scss']
})
export class RecipeFormLinkComponent implements OnInit {
  ingredients = new FormControl();
  ingredientsList: Ingredient[];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.getIngredients()
  }

  getIngredients(): void {
    this.ingredientService.getIngredients().subscribe(ing =>this.ingredientsList = ing.data ?? [{_id:0,name:"non"}]);
  }

}
