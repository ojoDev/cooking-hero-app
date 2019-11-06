import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../beans/Recipe';
import { RecipesService } from '../services/recipes.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  providers: [RecipesService]
})
export class RecipeEditComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Input()
  hidden = false;


  constructor(private recipesService: RecipesService, private route: ActivatedRoute,  private location: Location) {
      // TODO DMS: esta suscripcion del constructor sobraría
    this.recipesService.recipeResult.subscribe(
      (recipeInput: Recipe) => {
        console.log('Recipe received for edit: ' + recipeInput.id);
        if (recipeInput !== null) {
          this.recipe = recipeInput;
        }
      });
   }

  ngOnInit() {
    this.getRecipe();
  }

  onSubmit(form: NgForm) {
    console.log('Update recipe... ');
  }

  getRecipe() {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipesService.getRecipe(id).subscribe
      (recipe => this.recipe = recipe);
  }

  goBack(): void {
    this.location.back();
  }
}
