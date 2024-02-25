package com.openlab.openpageapi.service;

import com.openlab.openpageapi.entity.UserAccount;
import com.openlab.openpageapi.mapper.UserAccountMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserAccountServiceImpl implements UserAccountService {
    @Autowired
    private UserAccountMapper userAccountMapper;

    @Override
    public UserAccount createUserAccount(UserAccount userAccount) {
        userAccountMapper.insert(userAccount);
        return userAccount;
    }

    @Override
    public List<UserAccount> getAllUserAccounts() {
        return userAccountMapper.findAll();
    }

    @Override
    public void deleteUserAccount(Integer id) {
        userAccountMapper.delete(id);
    }

    @Override
    public UserAccount findByUsername(String username) {
        return userAccountMapper.findByUsername(username);
    }
}
