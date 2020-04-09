package com.example.e_recipes.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@Entity
@Data
@Table(name = "ingredients")
public class Ingredient {

    @Transient
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    private static Long ingredientCounter = 1L;


    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String amount;

    //@JsonIgnore
    //@ManyToMany(mappedBy = "ingredients",fetch = FetchType.LAZY)
    //private List<Recipe> recipes;
    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;


    public static Ingredient createIngredient(String name, String amount,Recipe recipe) {

        Ingredient ingredient = new Ingredient();
        ingredient.id=ingredientCounter;
        ingredientCounter++;
        ingredient.setName(name);
        ingredient.setAmount(amount);
        ingredient.setRecipe(recipe);
        return ingredient;
    }

}
