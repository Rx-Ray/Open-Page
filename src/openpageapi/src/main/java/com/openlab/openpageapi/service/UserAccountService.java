package com.openlab.openpageapi.service;

import com.openlab.openpageapi.entity.UserAccount;

import java.util.List;

public interface UserAccountService {
    UserAccount createUserAccount(UserAccount userAccount);
    List<UserAccount> getAllUserAccounts();
    void deleteUserAccount(Integer id);
    UserAccount findByUsername(String username);
}
