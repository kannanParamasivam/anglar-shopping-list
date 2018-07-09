import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Test recipe desc",
      "https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/10/1280x1280/square-1520278006-grilled-chicken-breast-vegetables.jpg?resize=640:*"),
      new Recipe("Test new Recipe", "Test nre recipe desc",
      "https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/10/1280x1280/square-1520278006-grilled-chicken-breast-vegetables.jpg?resize=640:*")
  ];

  constructor() { }

  ngOnInit() {
  }

}
