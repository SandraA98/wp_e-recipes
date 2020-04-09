package com.example.e_recipes.repository;

import com.example.e_recipes.models.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    User save(User user);
    Optional<User> getByUserName(String userName);
    List<User> findAll();
    Optional<User> findById(Long id);
}
