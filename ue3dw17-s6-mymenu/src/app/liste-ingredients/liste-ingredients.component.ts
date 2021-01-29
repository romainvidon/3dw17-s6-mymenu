import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'app-liste-ingredients',
  templateUrl: './liste-ingredients.component.html',
  styleUrls: ['./liste-ingredients.component.scss']
})
export class ListeIngredientsComponent implements OnInit {
  ingredientsList: Ingredient[];
    
  constructor(private ingredientService : IngredientService) { }

  ngOnInit(): void {}
  getIngredients():void{
      this.ingredientService.getIngredients()
      .subscribe(ingredientsList => this.ingredientsList = ingredientsList);
  }

}
