package com.example.e_recipes.service;

import com.example.e_recipes.models.Ingredient;
import com.example.e_recipes.models.Recipe;

import java.util.List;
import java.util.Optional;

public interface IngredientService {

    List<Ingredient> getAll();
    Ingredient getById(Long id);
    Ingredient addIngredient(String name, String amount, Recipe recipe);
    Optional<Ingredient> getByIngredientName(String name);
    void delete(Long id);
    List<Ingredient> getByRecipeId(Long id);
}
