import { Component, OnInit, Input } from '@angular/core';
import { SearchRecipesService } from '../services/search-recipes.service';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-recipe-resume',
  templateUrl: './recipe-resume.component.html',
  styleUrls: ['./recipe-resume.component.css']
})
export class RecipeResumeComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  description: string;

  constructor(private searchRecipesService: SearchRecipesService) { 
    this.searchRecipesService.recipesResult.subscribe(
      (recipe: {name: string, description: string}) =>
        {
          if (recipe === null) {
            this.name = '';
            this.description = '';
          } else {
            this.name = recipe.name;
            this.description = recipe.description;
          }
        });
  }

  ngOnInit() {
  
  }

}
