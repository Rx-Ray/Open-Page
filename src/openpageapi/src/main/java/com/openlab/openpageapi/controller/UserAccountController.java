package com.openlab.openpageapi.controller;

import com.openlab.openpageapi.entity.UserAccount;
import com.openlab.openpageapi.service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class UserAccountController {
    private final UserAccountService userAccountService;

    @Autowired
    public UserAccountController(UserAccountService userAccountService) {
        this.userAccountService = userAccountService;
    }

    @PostMapping("/users")
    public UserAccount createUserAccount(@RequestBody UserAccount userAccount) {
        return userAccountService.createUserAccount(userAccount);
    }

    @GetMapping("/users")
    public List<UserAccount> getAllUserAccounts() {
        return userAccountService.getAllUserAccounts();
    }

    @DeleteMapping("/users/{id}")
    public void deleteUserAccount(@PathVariable Integer id) {
        userAccountService.deleteUserAccount(id);
    }

    @GetMapping("/users/{username}")
    public UserAccount findByUsername(@PathVariable String username) {
        return userAccountService.findByUsername(username);
    }
}
