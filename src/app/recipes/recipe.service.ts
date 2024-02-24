import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe-list/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 
        'test desc', 
        'https://lh3.googleusercontent.com/p82p6mZjHu2Ch2XTBqw5s23-_60Fw84uzh0Fon-C1a5TvPxu7sPqfxsKBgHeYc9mx4kEJ7aEbbgOdQRBZKAMLz6UlRXmuzkjWg=w1667-h1250-c-rj-v1-e365',
        [
          new Ingredient('Meat',1),
          new Ingredient('French Fries',20)
        ]),
        new Recipe('A test Recipe 2', 
        'test desc 2', 
        'https://lh3.googleusercontent.com/p82p6mZjHu2Ch2XTBqw5s23-_60Fw84uzh0Fon-C1a5TvPxu7sPqfxsKBgHeYc9mx4kEJ7aEbbgOdQRBZKAMLz6UlRXmuzkjWg=w1667-h1250-c-rj-v1-e365',
        [
          new Ingredient('Buns',2),
          new Ingredient('Meat',1)
        ])
      ];

      constructor(private slService: ShoppingListService) {

      }

      getRecipes () {
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }
}