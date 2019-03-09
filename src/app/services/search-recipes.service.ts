import {EventEmitter, Output, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeResume } from '../beans/RecipeResume';

@Injectable()
export class SearchRecipesService {

    constructor( private http: HttpClient) {}

    @Output() recipesResult = new EventEmitter<RecipeResume>();


    
    searchRecipes(searchName: string) {
        if (searchName === '') {
            this.recipesResult.emit(null);
        } else {
            console.log('Searching...');
            return this.http.get< {name: string, description: string} >('http://localhost:8080/recipes?name=' + searchName).forEach(
          //  return this.http.get('http://localhost:8080/recipes').forEach(
                response => {
                   // const data: {name: string, description: string} [] = response.json();
                   
                   this.recipesResult.emit(response[0]);
                   return response[0];
                }
            );   
        }
    }
}
