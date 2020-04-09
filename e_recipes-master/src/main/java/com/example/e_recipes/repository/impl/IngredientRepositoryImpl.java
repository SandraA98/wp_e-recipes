package com.example.e_recipes.repository.impl;

import com.example.e_recipes.models.Ingredient;
import com.example.e_recipes.repository.IngredientRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class IngredientRepositoryImpl implements IngredientRepository {

    private final JpaIngredientRepository ingredientRepository;

    public IngredientRepositoryImpl(JpaIngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    @Override
    public List<Ingredient> getAllIngredients() {
        return this.ingredientRepository.findAll();
    }

    @Override
    public Optional<Ingredient> getById(Long id) {
        return this.ingredientRepository.findById(id);
    }

    @Override
    public Ingredient save(Ingredient ingredient) {
        return this.ingredientRepository.save(ingredient);
    }

    @Override
    public void deleteById(Long id) {
        ingredientRepository.deleteById(id);
    }

    @Override
    public Optional<Ingredient> getByName(String name) {
        return this.ingredientRepository.findByName(name);
    }

    @Override
    public List<Ingredient> getByRecipeId(Long id) {
        return this.ingredientRepository.findByRecipeId(id);
    }
}
