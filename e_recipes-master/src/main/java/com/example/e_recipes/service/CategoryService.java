package com.example.e_recipes.service;

import com.example.e_recipes.models.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    Category getById(Long id);

    Category addCategory(String name);

    List<Category> getAll();
}
