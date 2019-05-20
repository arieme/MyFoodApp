import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
   // recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('A test recipe',
         'this a simply test',
         'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/9/22/0/FNK_Shortcut-Chicken-Enchiladas_s4x3.jpg.rend.hgtvcom.826.620.suffix/1474588972138.jpeg',
         [new Ingredient('Meat',2), new Ingredient('french fries',20)]),
        new Recipe('Another test recipe',
         'this a simply test',
         'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/9/22/0/FNK_Shortcut-Chicken-Enchiladas_s4x3.jpg.rend.hgtvcom.826.620.suffix/1474588972138.jpeg',
         [new Ingredient('Buns',2), new Ingredient('Meat',1)])                
      ];
    
    constructor(private slService:ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }
     addIngredientsToShoppingList(ingredients :Ingredient[]){
         this.slService.addIngredients(ingredients);

     }

    
}