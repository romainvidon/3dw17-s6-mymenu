import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe = {"_id":"","name":"aa","type":""};
  constructor() { }

  ngOnInit(): void {
  }
  isLink():boolean{
    return this.recipe?.type === "link";
  }
  isDetails():boolean{
    return this.recipe?.type === "details";

  }

}
