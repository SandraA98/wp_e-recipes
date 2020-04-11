package com.example.e_recipes.web;

import com.example.e_recipes.models.Category;
import com.example.e_recipes.models.User;
import com.example.e_recipes.service.UserService;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.StyledEditorKit;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {

    private final UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public List<User> getAllUsers(){
        return userService.getAll();
    }


    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.getById(id);
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public User addUser(@RequestParam String email,
                        @RequestParam String userName,
                        @RequestParam String password
    )
    {

        return userService.addUser(email,userName,password);
    }

    @GetMapping("/name/{userName}")
    public User getByUserName(@PathVariable String userName){
        return userService.getByUserName(userName);
    }

    @GetMapping("/{userName}/{password}")
    public Boolean checkPassword(@PathVariable String userName, @PathVariable String password){
        String hashPassword = String.valueOf(password.hashCode());
        User u = userService.getByUserName(userName);
        String userPassword = u.getPassWord();
        if(hashPassword.equals(userPassword)){
            return true;
        }
        return false;
    }
}
