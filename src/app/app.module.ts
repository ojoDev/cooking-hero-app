import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipeResumeComponent } from './recipe-resume/recipe-resume.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    RecipeResumeComponent,
    MainSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
