package com.example.e_recipes.web;

import com.example.e_recipes.models.Ingredient;
import com.example.e_recipes.models.Recipe;
import com.example.e_recipes.service.IngredientService;
import com.example.e_recipes.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/ingredients")
public class IngredientController {

    private final IngredientService ingredientService;

    private final RecipeService recipeService;


    public IngredientController(IngredientService ingredientService,RecipeService recipeService) {
        this.ingredientService = ingredientService;
        this.recipeService=recipeService;
    }

    @GetMapping("/")
    public List<Ingredient> getAllRecipes(){
        return ingredientService.getAll();
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Ingredient createIngredient(@RequestParam String name,
                                       @RequestParam String amount,
                                       @RequestParam Long recipeId
    )
    {
        Recipe recipe = recipeService.getById(recipeId);
        Ingredient ingredient = ingredientService.addIngredient(name,amount,recipe);
        recipeService.addIngredient(recipeId,ingredient);
        return ingredient;
    }

    @GetMapping(params = "ingredient")
    public Optional<Ingredient> getRecipeByIngredientName(@RequestParam String ingredient){
        return ingredientService.getByIngredientName(ingredient);
    }
    @GetMapping("/recipe/{id}")
    public List<Ingredient> getRecipeIngredients(@PathVariable Long id){
        return ingredientService.getByRecipeId(id);
    }
    @GetMapping("/{id}")
    public Ingredient getIngredientById(@PathVariable Long id){
        return ingredientService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteIngredientById(@PathVariable Long id){
        ingredientService.delete(id);
    }
}

