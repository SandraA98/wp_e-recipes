package com.example.e_recipes.repository;

import com.example.e_recipes.models.Cookbook;

import java.util.List;
import java.util.Optional;

public interface CookbookRepository {

    public List<Cookbook> getAllCookbooks();

    Cookbook save(Cookbook cookbook);

    Optional<Cookbook> getById(Long id);
}
