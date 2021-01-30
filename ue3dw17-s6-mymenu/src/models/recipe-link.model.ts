import { Recipe } from "./recipe.model";

export interface RecipeLink extends Recipe{
    url: string;
    type: "link";
  }