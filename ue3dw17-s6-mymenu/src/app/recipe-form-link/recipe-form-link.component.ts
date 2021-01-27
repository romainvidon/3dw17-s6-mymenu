import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ingredient } from '../../models/ingredient.model'

@Component({
  selector: 'app-recipe-form-link',
  templateUrl: './recipe-form-link.component.html',
  styleUrls: ['./recipe-form-link.component.scss']
})
export class RecipeFormLinkComponent implements OnInit {
  ingredients = new FormControl();
  ingredientsList: Ingredient[] = [{'_id': 42,'name':'Salade'},{'_id': 784,'name':'Tomates'},{'_id': 7946,'name':'Oignons'}];

  constructor() { }

  ngOnInit(): void {
  }

}
