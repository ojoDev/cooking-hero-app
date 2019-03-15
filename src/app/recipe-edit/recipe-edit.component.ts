import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../beans/Recipe';
import { RecipesService } from '../services/recipes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Input()
  hidden = false;

  constructor(private recipesService: RecipesService) {
    this.recipesService.recipeResult.subscribe(
      (recipeInput: Recipe) => {
        console.log('Recipe received for edit: ' + recipeInput.id);
        if (recipeInput !== null) {
          this.recipe = recipeInput;
        }
      });
   }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Update recipe... ');
  }
}
