import { Component, OnInit, Input } from '@angular/core';
import { SearchRecipesService } from '../services/search-recipes.service';
import { RecipeResume } from '../beans/RecipeResume';

@Component({
  selector: 'app-recipe-resume',
  templateUrl: './recipe-resume.component.html',
  styleUrls: ['./recipe-resume.component.css']
})
export class RecipeResumeComponent implements OnInit {

  @Input()
  recipe: RecipeResume = { name: '', description: ''};

  constructor(private searchRecipesService: SearchRecipesService) {
    this.searchRecipesService.recipesResult.subscribe(
      (inputRecipe: RecipeResume) =>
        {
          if (inputRecipe === null) {
            this.recipe.name = '';
            this.recipe.description = '';
          } else {
            this.recipe.name = inputRecipe.name;
            this.recipe.description = inputRecipe.description;
          }
        });
  }

  ngOnInit() {
  }

}
