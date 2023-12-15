import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from './recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'test desc', 'https://lh3.googleusercontent.com/p82p6mZjHu2Ch2XTBqw5s23-_60Fw84uzh0Fon-C1a5TvPxu7sPqfxsKBgHeYc9mx4kEJ7aEbbgOdQRBZKAMLz6UlRXmuzkjWg=w1667-h1250-c-rj-v1-e365'),
    new Recipe('A test Recipe 2', 'test desc 2', 'https://lh3.googleusercontent.com/p82p6mZjHu2Ch2XTBqw5s23-_60Fw84uzh0Fon-C1a5TvPxu7sPqfxsKBgHeYc9mx4kEJ7aEbbgOdQRBZKAMLz6UlRXmuzkjWg=w1667-h1250-c-rj-v1-e365')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected (recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
