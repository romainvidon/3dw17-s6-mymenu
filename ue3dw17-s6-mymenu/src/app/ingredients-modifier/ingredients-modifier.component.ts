import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from 'src/models/ingredient.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredients-modifier',
  templateUrl: './ingredients-modifier.component.html',
  styleUrls: ['./ingredients-modifier.component.scss']
})
export class IngredientsModifierComponent implements OnInit {
    id: string;
    ingredient:Ingredient={"_id":"","name":""};

  constructor(private ingredientService: IngredientService, private _snackBar: MatSnackBar,private route: ActivatedRoute) {}

  getIngredient(id: string): void{
    this.ingredientService.getIngredient(this.id).subscribe();
    }
    update():void{
    this.ingredientService.updateIngredients(this.ingredient).subscribe(res => {
        if(res){
            this._snackBar.open("Ingrédient modifié avec succès : " + res.name);
        }
        });
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {this.id = params.get("id"); this.getIngredient(this.id)});
    }

}
