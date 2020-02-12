import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, OnInit } from '@angular/core';

export class ShoppingListService implements OnInit {
ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 8)
  ];

  ngOnInit() {

  }

  getIngredient() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
