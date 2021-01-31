import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeAddLinkComponent } from './recipe-add-link/recipe-add-link.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsAddComponent } from './ingredients-add/ingredients-add.component';
import { ListeIngredientsComponent } from './liste-ingredients/liste-ingredients.component';
import { IngredientsModifierComponent } from './ingredients-modifier/ingredients-modifier.component';
import { RecipeEditLinkComponent } from './recipe-edit-link/recipe-edit-link.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    RecipeAddLinkComponent,
    IngredientsAddComponent,
    ListeIngredientsComponent,
    IngredientsModifierComponent,
    RecipeEditLinkComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {action:"OK",duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
