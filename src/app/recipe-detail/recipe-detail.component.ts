import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../beans/Recipe';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [RecipesService]
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Input()
  hiddenDetail = true;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute, private location: Location, private router: Router) {
    // TODO DMS: esta suscripcion del constructor sobraría
    this.recipesService.recipeResult.subscribe(
      (recipeInput: Recipe) => {
        console.log('Recipe received ' + recipeInput.id);
        if (recipeInput !== null) {
          this.recipe = recipeInput;
        }
      });
  }

  ngOnInit() {
    this.getRecipe();
  //  this.route.params.subscribe( // params es observable y vamos a definer su comportamiento
  //    (params: Params) => { // Ante Cambios en params
  //      this.recipe.name = params['id'];
  //    }
  //  );
  }

  getRecipe() {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipesService.getRecipe(id).subscribe
      (recipe => this.recipe = recipe);
  }

  goEdit(): void {
    this.router.navigate(['/recipes', this.recipe.id, 'edit']);
  }
  
  goBack(): void {
    this.location.back();
  }
}
