package com.example.e_recipes.service.impl;

import com.example.e_recipes.exceptions.RecipeNotFoundException;
import com.example.e_recipes.models.Cookbook;
import com.example.e_recipes.repository.CookbookRepository;
import com.example.e_recipes.service.CookbookService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CookbookServiceImpl implements CookbookService {

    private final CookbookRepository cookbookRepository;

    public CookbookServiceImpl(CookbookRepository cookbookRepository) {
        this.cookbookRepository = cookbookRepository;
    }

    @Override
    public List<Cookbook> getAll() {
        return cookbookRepository.getAllCookbooks();
    }

    @Override
    public Cookbook addCookbook(String title,Float price) {
        Cookbook cookbook = Cookbook.createCookbook(title,price);
        return cookbookRepository.save(cookbook);
    }

    @Override
    public Cookbook getById(Long id) {
        return cookbookRepository.getById(id).orElseThrow(()->new RecipeNotFoundException());

    }
}
