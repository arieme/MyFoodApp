import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private  ingredients: Ingredient[] =[
        new Ingredient('Apples',5),
        new Ingredient('Tomatos',10)
      ];
    
  getIngredients(){
      return this.ingredients.slice();
  }
  getIngredient(index :number){
    return this.ingredients[index];
  }
  addIngredient(ingredient:Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
}
  addIngredients(ingredients:Ingredient[]){
    //for (let ingredient of ingredients){
      //this.addIngredient(ingredient);}


     this.ingredients.push(...ingredients);//...means that we will push all the list once we cant put []cause it will put it in one object in our array but... will convrte it to list and than every elt in one case of the array
     this.ingredientsChanged.next(this.ingredients.slice());
    
  }

  updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index]= newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());

  }
  
}