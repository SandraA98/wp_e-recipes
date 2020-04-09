package com.example.e_recipes.repository;

import com.example.e_recipes.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RecipeRepository  {

    Recipe save(Recipe recipe);
    List<Recipe> getAllRecipes();
    List<Recipe> searchRecipesByIng(String ingredient);
    Optional<Recipe> findById(Long id);
    void deleteById(Long id);
    List<Recipe> findByCategoryId(Long id);
    List<Recipe> searchRecipesByCat(String category);
    List<Recipe> findByUserId(Long id);
}
