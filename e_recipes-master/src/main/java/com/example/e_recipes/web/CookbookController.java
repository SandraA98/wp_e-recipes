package com.example.e_recipes.web;
import com.example.e_recipes.models.Cookbook;
import com.example.e_recipes.service.CookbookService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/cookbooks")
public class CookbookController {

    private final CookbookService cookbookService;

    public CookbookController(CookbookService cookbookService) {
        this.cookbookService = cookbookService;
    }

    @GetMapping("/")
    public List<Cookbook> getAllCookbooks(){
        return cookbookService.getAll();
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Cookbook addCookbook(@RequestParam String title,
                                @RequestParam Float price)
    {
        Cookbook cookbook = cookbookService.addCookbook(title,price);
        return cookbook;
    }

    @GetMapping("/{id}")
    public Cookbook getCookbookById(@PathVariable Long id){
        return cookbookService.getById(id);
    }

}
