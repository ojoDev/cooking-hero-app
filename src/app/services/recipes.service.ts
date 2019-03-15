import {EventEmitter, Output, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { RecipeResume } from '../beans/RecipeResume';
import { Recipe } from '../beans/Recipe';
import { Observable } from 'rxjs';
import {deserialize} from 'json-typescript-mapper';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { MapUtils } from '../utils/MapUtils';
import { RecipeMapper } from '../mapper/RecipeMapper';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class RecipesService {

    @Output() recipesResult = new EventEmitter<RecipeResume>();
    @Output() recipeResult = new EventEmitter<Recipe>();

    recipeMapper = new RecipeMapper;

    constructor( private http: HttpClient) {}

    getRecipes(searchName: string) {
        if (searchName === '') {
            this.recipesResult.emit(null);
        } else {
            console.log('Searching...');
            const url = 'http://localhost:8080/recipes?name=' + searchName + '&limit=20';
            return this.http.get< RecipeResume >(url,
                httpOptions).forEach(
                response => {
                   this.recipesResult.emit(response);
                   return response;
                }
            );
        }
    }


    getRecipe(id: string) {
        if (id !== '') {
            console.log('Searching recipe with id ' + id);
            const url = 'http://localhost:8080/recipes/' + id;
            return this.http.get< JSON >(url,
                httpOptions).forEach(
                response => {
                    const recipe = this.recipeMapper.toRecipe(response);
                    // TODO DMS emit this in a subject (rx) => http://reactivex.io/documentation/subject.html
                    this.recipeResult.emit(recipe);
                    return recipe;
                }
            );
        }
    }

    getRecipe_old(id: string) {
        if (id !== '') {
            console.log('Searching recipe with id ' + id);
            const url = 'http://localhost:8080/recipes/' + id;
            return this.http.get(url,httpOptions)
            .pipe(map((response: JSON)  => 
            MapUtils.deserialize(Recipe, response))).subscribe(

                response => {
                   // var recipe: Recipe = <Recipe> response;
                   // const recipe = deserialize(Recipe, response);
                    // TODO DMS emit this in a subject (rx) => http://reactivex.io/documentation/subject.html
                    this.recipeResult.emit(response);
                    return response;
                }
            )
            //.catch(error => {
            //    console.log('Error in getRecipe ' + id);
            //    return Observable.throw(error);
            //});
        }
    }

}
