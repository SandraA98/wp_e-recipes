package com.example.e_recipes.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@Entity
@Data
@Table(name = "authors")
public class User {

    @Transient
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    private static Long userCounter = 1L;

    @Id
    @GeneratedValue
    private Long id;

    private String email;

    private String userName;

    private String passWord;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Recipe> recipes;


    public static User createUser(String email, String userName, String password) {
        User user = new User();
        user.id=userCounter;
        userCounter++;
        user.setEmail(email);
        user.setUserName(userName);
        String hashPassword = String.valueOf(password.hashCode());
        user.setPassWord(hashPassword);

        return user;
    }
   /* public Integer getHashPassword(){
        return passWord.hashCode();
    }*/
}
