import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from 'src/models/ingredient.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ingredients-add',
  templateUrl: './ingredients-add.component.html',
  styleUrls: ['./ingredients-add.component.scss']
})
export class IngredientsAddComponent implements OnInit {

  constructor(private ingredientService: IngredientService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  add(title:string):void{
    let ingredient: Ingredient = {"_id": null,"name":title};
    this.ingredientService.addIngredients(ingredient).subscribe(
        res => {
            if(res){
              this._snackBar.open("Ingrédient modifié avec succès : " + res.name);
            }
          }
    );
    console.log(title);
  }

}
