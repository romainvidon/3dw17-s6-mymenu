import { Component, OnInit } from '@angular/core';
import { RecipeLink } from 'src/models/recipe-link.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../config';

@Component({
  selector: 'app-recipe-edit-link',
  templateUrl: './recipe-edit-link.component.html',
  styleUrls: ['./recipe-edit-link.component.scss']
})
export class RecipeEditLinkComponent implements OnInit {

  id: string;
  //private recipeService: RecipeService;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }
  recipe: RecipeLink = {"name":"","type":"link","_id":"","url":""};

  test(){
    console.log(this.recipe);
  }

  getRecipe(id: string): void{
    if(this.id != ""){
      this.recipeService.getRecipe(this.id).subscribe((r: RecipeLink) =>{
        if(r?.type === "link"){
          this.recipe = r;
          console.log(r);
        } else {
          console.log("pas le bon type", this.recipe);
        }
      });
    } else {
      console.log("rip, ça a pas marché");
    }
  }
  edit(){
    this.recipeService.editLink(this.recipe).subscribe();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {this.id = params.get("id"); this.getRecipe(this.id);}/*function(params){
      this.id = params.get("id");
      this.getRecipe.bind(this)(this.id);
    }*/);
  
  }
}
