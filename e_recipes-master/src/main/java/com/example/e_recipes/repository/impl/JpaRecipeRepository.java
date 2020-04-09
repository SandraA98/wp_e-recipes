package com.example.e_recipes.repository.impl;


import com.example.e_recipes.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JpaRecipeRepository extends JpaRepository<Recipe,Long> {

    @Query(value = "select r.* from recipes r left join ingredients i on r.id=i.recipe_id where i.name like :ingredient",nativeQuery = true)
    List<Recipe> searchRecipesByIng(@Param("ingredient") String ingredient);

    List<Recipe> findByCategoryId(Long id);

    @Query(value = "select r.* from recipes r left join categories c on r.category_id=c.id where c.name like :category",nativeQuery = true)
    List<Recipe> searchRecipesByCat(String category);

    List<Recipe> findByUserId(Long id);

    List<Recipe> findAllByOrderByDateDesc();
}
