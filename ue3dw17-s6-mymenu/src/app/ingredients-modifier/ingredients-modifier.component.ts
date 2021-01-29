import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'app-ingredients-modifier',
  templateUrl: './ingredients-modifier.component.html',
  styleUrls: ['./ingredients-modifier.component.scss']
})
export class IngredientsModifierComponent implements OnInit {
    //Fonction et variable pour afficher un message quand l'élément est ajouté.
    showMessage = false;
    toogleMessage(){
        this.showMessage = !this.showMessage;
    }

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
  }
  update(title:string):void{
    let ingredient: Ingredient = {"_id": null,"name":title};
    this.ingredientService.updateIngredients(ingredient).subscribe();
    console.log(title);
  }

}
