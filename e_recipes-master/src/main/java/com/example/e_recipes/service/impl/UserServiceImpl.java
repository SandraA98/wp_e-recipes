package com.example.e_recipes.service.impl;

import com.example.e_recipes.exceptions.ElementNotFoundException;
import com.example.e_recipes.models.User;
import com.example.e_recipes.repository.UserRepository;
import com.example.e_recipes.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getByUserName(String userName) {
        return userRepository.getByUserName(userName).orElseThrow(()->new ElementNotFoundException());
    }

    @Override
    public User addUser(String email, String userName, String password) {
        User user = User.createUser(email,userName,password);
        userRepository.save(user);
        return user;
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User getById(Long id) {
        return userRepository.findById(id).orElseThrow(()-> new ElementNotFoundException());
    }


}
