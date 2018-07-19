import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') ingredientNameElement: ElementRef;
  @ViewChild('amountInput') ingredientAmountElement: ElementRef;
  @Output('ingredientAdded') ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    const ingName = this.ingredientNameElement.nativeElement.value;
    const ingAmount = this.ingredientAmountElement.nativeElement.value;
    const ingredient: Ingredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(ingredient);
  }

}
