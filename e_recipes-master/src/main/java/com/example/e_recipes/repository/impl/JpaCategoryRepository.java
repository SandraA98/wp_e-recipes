package com.example.e_recipes.repository.impl;

import com.example.e_recipes.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaCategoryRepository extends JpaRepository<Category,Long> {
}
