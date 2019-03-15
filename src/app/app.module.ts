import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipeResumeComponent } from './recipe-resume/recipe-resume.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientDetailComponent } from './ingredient-detail/ingredient-detail.component';
import { StepDetailComponent } from './step-detail/step-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RecipeResumeComponent,
    MainSearchComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    IngredientDetailComponent,
    StepDetailComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
