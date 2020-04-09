package com.example.e_recipes.repository;

import com.example.e_recipes.models.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryRepository {

    Category save(Category category);

    Optional<Category> findById(Long id);

    List<Category> findAll();
}
