package com.example.e_recipes.web;

import com.example.e_recipes.models.Category;
import com.example.e_recipes.service.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/categories")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Category createCategory(@RequestParam String name){

        Category category = categoryService.addCategory(name);
        return  category;
    }

    @GetMapping("/")
    public List<Category> getAllCategories(){
        return categoryService.getAll();
    }


    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable Long id){
        return categoryService.getById(id);
    }
}
