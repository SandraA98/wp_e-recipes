package com.example.e_recipes.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@Entity
@Data
@Table(name = "categories")
public class Category {

    @Transient
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    private static Long categoryCounter = 1L;

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private List<Recipe> recipes;

    public static Category createCategory(String name) {
        Category category = new Category();
        category.id=categoryCounter;
        categoryCounter++;
        category.setName(name);
        return category;
    }
}
