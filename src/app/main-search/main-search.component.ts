import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css'],
  providers: [RecipesService]
})
export class MainSearchComponent implements OnInit {

  @Input()
  hiddenDetail = true;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }


  searchRecipes(event: Event)  {
    const recipeName = (<HTMLInputElement>event.target).value;
    this.recipesService.getRecipes(recipeName);
    console.log('search ' + recipeName);
  }

}
