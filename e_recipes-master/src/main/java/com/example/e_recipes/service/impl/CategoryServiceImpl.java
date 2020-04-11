package com.example.e_recipes.service.impl;

import com.example.e_recipes.exceptions.ElementNotFoundException;
import com.example.e_recipes.models.Category;
import com.example.e_recipes.repository.CategoryRepository;
import com.example.e_recipes.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category getById(Long id) {
        return categoryRepository.findById(id).orElseThrow(()-> new ElementNotFoundException());
    }

    @Override
    public Category addCategory(String name) {
        Category category = Category.createCategory(name);
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> getAll() {
        return categoryRepository.findAll();
    }
}
