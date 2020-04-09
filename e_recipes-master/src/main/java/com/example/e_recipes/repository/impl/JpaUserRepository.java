package com.example.e_recipes.repository.impl;

import com.example.e_recipes.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JpaUserRepository extends JpaRepository<User,Long> {

    Optional<User> findByUserName(String userName);

}
