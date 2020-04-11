package com.example.e_recipes.service.impl;

import com.example.e_recipes.models.Ingredient;
import com.example.e_recipes.exceptions.ElementNotFoundException;
import com.example.e_recipes.models.Recipe;
import com.example.e_recipes.repository.IngredientRepository;
import com.example.e_recipes.service.IngredientService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientServiceImpl implements IngredientService {

    private IngredientRepository ingredientRepository;

    public IngredientServiceImpl(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }
    @Override
    public List<Ingredient> getAll() {
        return ingredientRepository.getAllIngredients();
    }

    @Override
    public Ingredient getById(Long id) {
        return ingredientRepository.getById(id).orElseThrow(()->new ElementNotFoundException());
    }

    @Override
    public Ingredient addIngredient(String name, String amount, Recipe recipe) {
        Ingredient ingredient = Ingredient.createIngredient(name,amount,recipe);
        ingredientRepository.save(ingredient);
        return ingredient;
    }

    @Override
    public Optional<Ingredient> getByIngredientName(String name) {
        return ingredientRepository.getByName(name);
    }

    @Override
    public void delete(Long id) {
        this.ingredientRepository.deleteById(id);
    }

    @Override
    public List<Ingredient> getByRecipeId(Long id) {
        return ingredientRepository.getByRecipeId(id);
    }
}
