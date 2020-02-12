import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Meat Balls',
    'This is a recipe for my famous meat balls',
     // tslint:disable-next-line: max-line-length
     'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_950/k%2FPhoto%2FRecipes%2F2019-08-how-to-juiciest-turkey-meatballs%2FHow-to-Make-the-Best-Juiciest-Turkey-Meatballs_055'
     ),
    new Recipe('Stir Fry',
    'This is a description for Stir Fry',
     // tslint:disable-next-line: max-line-length
     'https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry-733x1103.jpg'
     ),
    new Recipe('Lasgane',
    'This is a description for recipe',
     // tslint:disable-next-line: max-line-length
     'https://www.jessicagavin.com/wp-content/uploads/2014/02/slice-of-meat-lasagna-600x900.jpg'
     ),
  ];

getRecipes() {
  return this.recipes.slice();
}

}
