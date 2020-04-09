package com.example.e_recipes.repository.impl;

import com.example.e_recipes.models.Category;
import com.example.e_recipes.repository.CategoryRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CategoryRepositoryImpl implements CategoryRepository {

    private final JpaCategoryRepository categoryRepository;

    public CategoryRepositoryImpl(JpaCategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category save(Category category) {
        return this.categoryRepository.save(category);
    }

    @Override
    public Optional<Category> findById(Long id) {
        return this.categoryRepository.findById(id);
    }

    @Override
    public List<Category> findAll() {
        return this.categoryRepository.findAll();
    }
}

