package com.example.e_recipes.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@Entity
@Data
@Table(name = "cookbooks")
public class Cookbook {

    @Transient
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    private static Long cookbookCounter = 1L;

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private Float price;

    @JsonIgnore
    @ManyToMany(mappedBy = "cookbooks",fetch = FetchType.LAZY)
    private List<Recipe> recipes;


    public static Cookbook createCookbook(String title,Float price) {
        Cookbook cookbook = new Cookbook();
        cookbook.id=cookbookCounter;
        cookbookCounter++;
        cookbook.setTitle(title);
        cookbook.setPrice(price);
        return cookbook;
    }
}
