import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @ViewChild('measuringUnit', { static: false }) measuringUnit: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem() {
   const nameInput = this.nameInputRef.nativeElement.value;
   const amountInput = this.amountInputRef.nativeElement.value;
   const measuringUnit = this.measuringUnit.nativeElement.value;
   const newIngredient = new Ingredient(nameInput, amountInput, measuringUnit );

   this.shoppingListService.addIngredient(newIngredient);
 }
}
