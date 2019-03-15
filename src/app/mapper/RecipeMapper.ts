import { Recipe } from '../beans/Recipe';
import { Step } from '../beans/Step';
import { Ingredient } from '../beans/Ingredient';

export class RecipeMapper {

    toRecipe(recipeJson: JSON) {
        const recipe =  new Recipe();
        recipe.id = recipeJson['id'];
        recipe.name = recipeJson['name'];
        recipe.description = recipeJson['description'];
        recipe.cousineType = recipeJson['cousine-type'];
        recipe.cookingTime = recipeJson['cooking-time'];
        recipe.preparationTime = recipeJson['preparation-time'];
        recipe.difficulty = recipeJson['difficulty'];
        recipe.photo = recipeJson['photo.href'];
        const steps: Step[] = [];
        for (var stepIIndex in recipeJson['steps']) {
            var stepJson =  recipeJson['steps'][stepIIndex];
            var step = new Step();
            step.description = stepJson['description'];
            step.time = stepJson['time'];
            steps.push(step);
        }
        recipe.steps = steps;
        const ingredients: Ingredient[] = [];
        for (var ingredientIndex in recipeJson['ingredients']) {
            var ingredientJson =  recipeJson['ingredients'][ingredientIndex];
            var ingredient = new Ingredient();
            ingredient.product = ingredientJson['product'];
            ingredient.quantity = ingredientJson['quantity'];
            ingredient.measure = ingredientJson['measure'];
            ingredients.push(ingredient);
        }
        recipe.ingredients = ingredients;
        recipe.user = recipeJson['user'];
        return recipe;
    }
}