package com.example.e_recipes.web;

import com.example.e_recipes.models.*;
import com.example.e_recipes.repository.CategoryRepository;
import com.example.e_recipes.repository.UserRepository;
import com.example.e_recipes.service.*;
import net.bytebuddy.description.field.FieldDescription;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.persistence.criteria.CriteriaBuilder;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Array;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/recipes")
public class RecipeController {

    private final RecipeService recipeService;
    private final IngredientService ingredientService;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;
    private Long counter;



    public RecipeController(RecipeService recipeService, IngredientService ingredientService, CategoryRepository categoryRepository, UserRepository userRepository) {
        this.recipeService = recipeService;
        this.ingredientService=ingredientService;
        this.categoryRepository=categoryRepository;
        this.userRepository=userRepository;
        counter=1L;
    }

    @GetMapping("/")
    public List<Recipe> getAllRecipes(){
        return recipeService.getAll();
    }

    @PostMapping("/add")
    public Recipe addRecipe(@RequestParam String name,
                            @RequestParam String description,
                            @RequestParam Long categoryId,
                            @RequestParam Long userId

    ) {
        Optional<Category> category = categoryRepository.findById(categoryId);
        Optional<User> user = userRepository.findById(userId);

        return recipeService.addRecipe(name,description,category.get(),user.get());

    }

    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable Long id){
        return recipeService.getById(id);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteRecipeById(@PathVariable Long id){
        recipeService.delete(id);
    }

    @GetMapping(params = "ingredient")
    public List<Recipe> searchRecipesByIngredient(@RequestParam String ingredient){
        return recipeService.searchRecipesByIng(ingredient);
    }

    @GetMapping("/category/{id}")
    public List<Recipe> getRecipeByCategoryId(@PathVariable Long id){
        return recipeService.getByCategoryId(id);
    }

    @GetMapping("/user/{id}")
    public List<Recipe> getRecipeByUserId(@PathVariable Long id){
        return recipeService.getByUserId(id);
    }
}
