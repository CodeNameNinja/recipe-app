import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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


  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
