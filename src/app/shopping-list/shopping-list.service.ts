import { Ingredient } from '../shared/ingredient.model';
import { OnInit, Injectable } from '@angular/core';
import { Subject } from 'rxjs'


@Injectable()
export class ShoppingListService {
ingredientsChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5 , ''),
    new Ingredient('Tomato', 8, '')
  ];
constructor() {}


  getIngredient() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngriedents(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
