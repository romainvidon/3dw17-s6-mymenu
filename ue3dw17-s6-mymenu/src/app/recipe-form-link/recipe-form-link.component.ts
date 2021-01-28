import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ingredient } from '../../models/ingredient.model'
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-recipe-form-link',
  templateUrl: './recipe-form-link.component.html',
  styleUrls: ['./recipe-form-link.component.scss']
})
export class RecipeFormLinkComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(){}

}
