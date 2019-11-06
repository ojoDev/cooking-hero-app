import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSearchComponent } from './main-search/main-search.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', component: MainSearchComponent}, // localhost:4200
  { path: 'recipes/:id', component: RecipeDetailComponent}, // localhost:4200/recipes/{id}
  { path: 'recipes/:id/edit', component: RecipeEditComponent}, // localhost:4200/recipes/{id}/edit
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
