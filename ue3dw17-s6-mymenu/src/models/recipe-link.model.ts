import { Ingredient } from "./ingredient.model";

export interface RecipeLink {
    _id: number;
    titre: string;
    url: string;
    type: "link";
    ingredients?: Ingredient[];
  }