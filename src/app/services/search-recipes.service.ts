import {EventEmitter, Output, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SearchRecipesService {

    constructor(private http: Http) {};

    @Output() recipesResult = new EventEmitter<{name: string, description: string}>();

    searchRecipes(searchName: string) {
        if (searchName === '') {
            this.recipesResult.emit(null);
        } else {
            console.log('Searching...');
            return this.http.get('http://localhost:8080/recipes?name=' + searchName).forEach(
                (response: Response) => {
                    const data: {name: string, description: string} [] = response.json();
                    this.recipesResult.emit(data[0]);
                    return data;
                }
            );   
        }
    }
}
