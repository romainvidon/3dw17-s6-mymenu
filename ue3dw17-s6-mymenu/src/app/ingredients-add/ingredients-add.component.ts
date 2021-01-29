import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'app-ingredients-add',
  templateUrl: './ingredients-add.component.html',
  styleUrls: ['./ingredients-add.component.scss']
})
export class IngredientsAddComponent implements OnInit {
    //Fonction et variable pour afficher un message quand l'élément est ajouté.
    showMessage = false;
    toogleMessage(){
        this.showMessage = !this.showMessage;
    }

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
  }
  add(title:string):void{
    let ingredient: Ingredient = {"_id": null,"name":title};
    this.ingredientService.addIngredients(ingredient).subscribe();
    console.log(title);
  }

}
