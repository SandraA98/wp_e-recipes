package com.example.e_recipes.repository.impl;

import com.example.e_recipes.models.Cookbook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaCookbookRepository extends JpaRepository<Cookbook,Long> {
}
