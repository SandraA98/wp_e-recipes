package com.example.e_recipes.repository.impl;

import com.example.e_recipes.models.Cookbook;
import com.example.e_recipes.repository.CookbookRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CookbookRepositoryImpl implements CookbookRepository {

    private final JpaCookbookRepository cookbookRepository;

    public CookbookRepositoryImpl(JpaCookbookRepository cookbookRepository) {
        this.cookbookRepository = cookbookRepository;
    }

    @Override
    public List<Cookbook> getAllCookbooks() {
        return this.cookbookRepository.findAll();
    }

    @Override
    public Cookbook save(Cookbook cookbook) {
        return this.cookbookRepository.save(cookbook);
    }

    @Override
    public Optional<Cookbook> getById(Long id) {
        return this.cookbookRepository.findById(id);
    }
}
