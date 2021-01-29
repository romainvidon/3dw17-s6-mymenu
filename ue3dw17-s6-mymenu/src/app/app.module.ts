import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeFormLinkComponent } from './recipe-form-link/recipe-form-link.component';
import { RecipeAddLinkComponent } from './recipe-add-link/recipe-add-link.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsAddComponent } from './ingredients-add/ingredients-add.component';
import { ListeIngredientsComponent } from './liste-ingredients/liste-ingredients.component';
import { IngredientsModifierComponent } from './ingredients-modifier/ingredients-modifier.component';





@NgModule({
  declarations: [
    AppComponent,
    RecipeFormLinkComponent,
    RecipeAddLinkComponent,
    IngredientsAddComponent,
    ListeIngredientsComponent,
    IngredientsModifierComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
