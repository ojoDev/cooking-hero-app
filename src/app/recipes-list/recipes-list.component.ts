import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { RecipeResume } from '../beans/RecipeResume';
import { Recipe } from '../beans/Recipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {

  @Input()
  recipeList: RecipeResume [] = [];

  @Output() recipeResult = new EventEmitter<Recipe>();

  constructor(private router: Router, private recipesService: RecipesService) {
    this.recipesService.recipesResult.subscribe(
      (recipeList: RecipeResume[]) =>
        {
          if (recipeList === null) {
            this.recipeList = [];
          } else {
            this.recipeList = recipeList;
          }
        });
  }


  ngOnInit() {

  }

  onSelect(recipeResume: RecipeResume) {
    console.log('Recipe selected: ' + recipeResume.name);
    this.router.navigate(['/recipes', recipeResume.id]);
  }

 
//  onSelect_old(recipeResume: RecipeResume) {
//   console.log('Recipe selected: ' + recipeResume.name);
//    this.recipesService.getRecipe(recipeResume.id);
//  }

}
