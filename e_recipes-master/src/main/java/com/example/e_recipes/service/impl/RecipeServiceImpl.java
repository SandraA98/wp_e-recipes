package com.example.e_recipes.service.impl;

import com.example.e_recipes.exceptions.ElementNotFoundException;
import com.example.e_recipes.models.Category;
import com.example.e_recipes.models.Ingredient;
import com.example.e_recipes.models.Recipe;
import com.example.e_recipes.models.User;
import com.example.e_recipes.repository.IngredientRepository;
import com.example.e_recipes.repository.RecipeRepository;
import com.example.e_recipes.service.RecipeService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeServiceImpl implements RecipeService {

    private RecipeRepository recipeRepository;
    private IngredientRepository ingredientRepository;

    public RecipeServiceImpl(RecipeRepository recipeRepository, IngredientRepository ingredientRepository) {
        this.recipeRepository = recipeRepository;
        this.ingredientRepository=ingredientRepository;
    }

    @Override
    public List<Recipe> getAll() {
        return this.recipeRepository.getAllRecipes();
    }

    @Override
    public Recipe getById(Long id) {
        return this.recipeRepository.findById(id).orElseThrow(()->new ElementNotFoundException());
    }

    @Override
    public void delete(Long id) {
        List<Ingredient> ingredients = this.ingredientRepository.getByRecipeId(id);
        for(Ingredient i : ingredients) {
            this.ingredientRepository.deleteById(i.getId());
        }
        this.recipeRepository.deleteById(id);
    }

    @Override
    public List<Recipe> searchRecipesByIng(String ingredient) {
        return this.recipeRepository.searchRecipesByIng(ingredient);
    }


    @Override
    public List<Recipe> getByCategoryId(Long id) {
        return this.recipeRepository.findByCategoryId(id);
    }

    @Override
    public List<Recipe> getByUserId(Long id) {
        return this.recipeRepository.findByUserId(id);
    }


    @Override
    public Recipe addRecipe(String name, String description, Category category, User user) {
        Recipe r = Recipe.createRecipe(name,description,category,user);
        return this.recipeRepository.save(r);
    }

    @Override
    public void addIngredient(Long recipeId, Ingredient ingredient) {
        Optional<Recipe> r = this.recipeRepository.findById(recipeId);
        List<Ingredient> ingredients = new ArrayList<>();
        ingredients.add(ingredient);
        r.get().setIngredients(ingredients);
    }
}
