package com.example.e_recipes.service;

import com.example.e_recipes.models.Category;
import com.example.e_recipes.models.Ingredient;
import com.example.e_recipes.models.Recipe;
import com.example.e_recipes.models.User;

import java.util.List;

public interface RecipeService {

    List<Recipe> getAll();
    Recipe getById(Long id);
    void delete(Long id);
    List<Recipe> searchRecipesByIng(String ingredient);
    List<Recipe> getByCategoryId(Long id);
    List<Recipe> searchRecipesByCat(String category);
    List<Recipe> getByUserId(Long id);
    Recipe addRecipe(String name, String description, Category category, User user);
    void addIngredient(Long recipeId, Ingredient ingredient);
}

