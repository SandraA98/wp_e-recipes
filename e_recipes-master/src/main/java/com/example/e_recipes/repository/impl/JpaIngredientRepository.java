package com.example.e_recipes.repository.impl;

import com.example.e_recipes.models.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface JpaIngredientRepository extends JpaRepository<Ingredient,Long> {

    Optional<Ingredient> findByName(String name);

    List<Ingredient> findByRecipeId(Long id);

}
