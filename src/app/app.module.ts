import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipeResumeComponent } from './recipe-resume/recipe-resume.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeResumeComponent,
    MainSearchComponent,
    RecipesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
