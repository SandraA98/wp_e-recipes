package com.example.e_recipes.service;

import com.example.e_recipes.models.User;

import java.util.List;

public interface UserService {
    User getByUserName(String userName);
    User addUser(String email, String userName, String password);
    List<User> getAll();
    User getById(Long id);
}
