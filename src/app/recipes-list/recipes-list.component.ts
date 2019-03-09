import { Component, OnInit, Input } from '@angular/core';
import { SearchRecipesService } from '../services/search-recipes.service';
import { RecipeResume } from '../beans/RecipeResume';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {

  @Input()
  recipeList: RecipeResume [] = [{name: 'test1', description: 'yeha'}, {name: 'testw', description: 'www'}];

  constructor(private searchRecipesService: SearchRecipesService) {
    this.searchRecipesService.recipesResult.subscribe(
      (recipe: RecipeResume) =>
        {
          if (recipe === null) {
            this.recipeList[0].name = '';
            this.recipeList[0].description = '';
          } else {
            this.recipeList[0].name = recipe.name;
            this.recipeList[0].description = recipe.description;
          }
        });
  }


  ngOnInit() {
    
  }

}
