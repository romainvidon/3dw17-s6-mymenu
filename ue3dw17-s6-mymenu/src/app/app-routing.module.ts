import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsAddComponent } from './ingredients-add/ingredients-add.component';
import { RecipeAddLinkComponent } from './recipe-add-link/recipe-add-link.component';
import { ListeIngredientsComponent } from './liste-ingredients/liste-ingredients.component';
import { IngredientsModifierComponent } from './ingredients-modifier/ingredients-modifier.component';
import { RecipeEditLinkComponent } from './recipe-edit-link/recipe-edit-link.component';

const routes: Routes = [
  {path: "recipe/add/link", component: RecipeAddLinkComponent},
  {path: "ingredients/add", component: IngredientsAddComponent},
  {path: "ingredients/liste", component: ListeIngredientsComponent},
  {path: "ingredients/edit/:id", component: IngredientsModifierComponent},
  {path: "recipe/edit/link/:id", component: RecipeEditLinkComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
