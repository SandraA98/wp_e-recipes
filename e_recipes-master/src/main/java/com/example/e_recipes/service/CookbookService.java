package com.example.e_recipes.service;

import com.example.e_recipes.models.Cookbook;

import java.util.List;

public interface CookbookService {

    public List<Cookbook> getAll();

    Cookbook addCookbook(String title,Float price);

    Cookbook getById(Long id);
}
