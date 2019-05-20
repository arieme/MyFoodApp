import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe:Recipe;
   id :number;

  constructor(private recipeService :RecipeService,
              private route: ActivatedRoute,
              private router:Router
              ) {

               }

  ngOnInit() {
    //const id =this.route.snapshot.params['id'];   this is true but it wont change the recipe shown if we ant to select another one until we click on anaother
    this.route.params.subscribe( (params: Params)=> {
       this.id=  +params['id'];  // + is to convert the id to a number
       this.recipe =this.recipeService.getRecipe(this.id);
    });
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{ relativeTo:this.route});

  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
