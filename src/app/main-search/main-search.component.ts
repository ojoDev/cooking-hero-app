import { Component, OnInit } from '@angular/core';
import { SearchRecipesService } from '../services/search-recipes.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css'],
  providers: [SearchRecipesService]
})
export class MainSearchComponent implements OnInit {

  constructor(private searchRecipesService: SearchRecipesService) { }

  ngOnInit() {
  }

  searchRecipes(event: Event)  {
    const recipeName = (<HTMLInputElement>event.target).value; // Se indica el component exacto para coger sus atributos
    this.searchRecipesService.searchRecipes(recipeName);
    console.log('search '+ recipeName);
  }

}
