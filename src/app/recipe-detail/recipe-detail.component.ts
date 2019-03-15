import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../beans/Recipe';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Input()
  hiddenDetail = true;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute) {
    this.recipesService.recipeResult.subscribe(
      (recipeInput: Recipe) => {
        console.log('Recipe received ' + recipeInput.id);
        if (recipeInput !== null) {
          this.recipe = recipeInput;
        }
      });
  }

  ngOnInit() {
    this.route.params.subscribe( // params es observable y vamos a definer su comportamiento
      (params: Params) => { // Ante Cambios en params
        this.recipe.name = params['id'];
      }
    );

  }

}
