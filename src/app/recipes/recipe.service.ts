import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {


  private recipes: Recipe[] = [
    new Recipe('Meat Balls',
    'This is a recipe for my famous meat balls',
     // tslint:disable-next-line: max-line-length
     'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_950/k%2FPhoto%2FRecipes%2F2019-08-how-to-juiciest-turkey-meatballs%2FHow-to-Make-the-Best-Juiciest-Turkey-Meatballs_055',
     [
       new Ingredient('Mince', 500, 'grams'),
       new Ingredient('Canned Tomatoes', 2, ''),
       new Ingredient('Onion', 1, ''),
       new Ingredient('Carrot', 1, ''),
     ],
     ),
    new Recipe('Stir Fry',
    'This is a description for Stir Fry',
     // tslint:disable-next-line: max-line-length
     'https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry-733x1103.jpg',
     [
       new Ingredient('Noodles', 3, 'cakes'),
       new Ingredient('Honey', 1, 'tbsp'),
       new Ingredient('Soy Sauce', 3, 'tsp'),
       new Ingredient('Corn Flower', 1, 'tbsp'),
       new Ingredient('Water', 2, 'tbsp'),
       new Ingredient('Vegtable Stock', 1, '1cube'),
       new Ingredient('Vegtables', 1, ''),
     ]
     ),
    new Recipe('Lasgane',
    'This is a description for recipe',
     // tslint:disable-next-line: max-line-length
     'https://www.jessicagavin.com/wp-content/uploads/2014/02/slice-of-meat-lasagna-600x900.jpg',
     [
       new Ingredient('Lasagne Sheets', 12, ''),
       new Ingredient('Mince', 500, 'grams'),
       new Ingredient('Tomato', 3, ''),
       new Ingredient('Carrots', 2, ''),
       new Ingredient('Onion', 1, ''),
       new Ingredient('Celery', 1, ''),
       new Ingredient('Corn Flower', 1, 'tbsp'),
       new Ingredient('Milk', 1, 'L'),

     ]
     ),
  ];
constructor(private sLService: ShoppingListService) {}
getRecipes() {
  return this.recipes.slice();
}
getRecipe(id: number) {
  return this.recipes[id];
}
addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.sLService.addIngriedents(ingredients);
}
}
