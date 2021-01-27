import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeAddLinkComponent } from './recipe-add-link/recipe-add-link.component';

const routes: Routes = [
  {path: "recipe/add/link", component: RecipeAddLinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
