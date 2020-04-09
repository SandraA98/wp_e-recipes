package com.example.e_recipes.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.jws.soap.SOAPBinding;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.concurrent.CancellationException;

@NoArgsConstructor
@Entity
@Data
@Table(name = "recipes")
public class Recipe {

    @Transient
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    private static Long recipeCounter = 1L;

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description;
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "recipe_cookbook",
            joinColumns = {
                    @JoinColumn(name = "recipe_id",referencedColumnName = "id")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "cookbook_id",referencedColumnName = "id")
            })
    private List<Cookbook> cookbooks;

    @JsonIgnore
    @OneToMany(mappedBy = "recipe")
    private List<Ingredient> ingredients;



    public static Recipe createRecipe(String name, String description, Category category,User user) {
        Recipe recipe = new Recipe();
        recipe.id = recipeCounter;
        recipeCounter++;
        recipe.setName(name);
        recipe.setDescription(description);
        recipe.setDate(LocalDate.now());
        recipe.setCategory(category);
        recipe.setUser(user);

        return recipe;
    }

}
