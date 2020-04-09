package com.example.e_recipes.repository;

import com.example.e_recipes.models.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IngredientRepository {

    List<Ingredient> getAllIngredients();

    Optional<Ingredient> getById(Long id);

    Ingredient save(Ingredient ingredient);

    void deleteById(Long id);

    Optional<Ingredient> getByName(String name);

    List<Ingredient> getByRecipeId(Long id);
}
