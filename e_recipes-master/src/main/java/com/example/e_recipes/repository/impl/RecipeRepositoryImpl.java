package com.example.e_recipes.repository.impl;

import com.example.e_recipes.models.Recipe;
import com.example.e_recipes.repository.RecipeRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class RecipeRepositoryImpl implements RecipeRepository {

    private final JpaRecipeRepository recipeRepository;

    public RecipeRepositoryImpl(JpaRecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @Override
    public Recipe save(Recipe recipe) {
        return this.recipeRepository.save(recipe);
    }

    @Override
    public List<Recipe> getAllRecipes() {
        return this.recipeRepository.findAllByOrderByDateDesc();
    }

    @Override
    public List<Recipe> searchRecipesByIng(String ingredient) {
        return this.recipeRepository.searchRecipesByIng(ingredient);
    }

    @Override
    public Optional<Recipe> findById(Long id) {
        return this.recipeRepository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        this.recipeRepository.deleteById(id);
    }

    @Override
    public List<Recipe> findByCategoryId(Long id) {
        return this.recipeRepository.findByCategoryId(id);
    }

    @Override
    public List<Recipe> searchRecipesByCat(String category) {
        return this.recipeRepository.searchRecipesByCat(category);
    }

    @Override
    public List<Recipe> findByUserId(Long id) {
        return this.recipeRepository.findByUserId(id);
    }

}
