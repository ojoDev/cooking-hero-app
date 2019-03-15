import { Step } from './Step';
import { Ingredient } from './Ingredient';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('recipe')
export class Recipe {
    id: string;

    // TODO DMS: si los jsonproperty no van, quitarlos
    @JsonProperty('name')
    name: string;

    @JsonProperty('description')
    description: string;

    cousineType: string[];

    @JsonProperty('preparation-time')
    preparationTime: number;

    cookingTime: number;

    difficulty: number;
    photo: string;
    steps: Step[];
    ingredients: Ingredient[];


    user: string;
    //TODO DMS: convertir a date
    creationDate: string;

    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.description = undefined;
        this.cousineType = [];
        this.preparationTime = undefined;
        this.cookingTime = undefined;
        this.difficulty = undefined;
        this.photo = undefined;
        this.steps = [];
        this.ingredients = [];
        this.user = undefined;
    }

}
