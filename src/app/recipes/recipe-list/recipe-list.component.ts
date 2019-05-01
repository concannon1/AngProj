import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe("My First Recipe", "This is test", "https://upload.wikimedia.org/wikipedia/commons/0/0e/Michael_Collins.jpg"),
        new Recipe("My 2nd Recipe", "Description", "https://static.4chan.org/image/temp/dinosaur.gif")
    ];

    constructor() { }

  ngOnInit() {
  }

}
