package com.openlab.openpageapi.mapper;

import com.openlab.openpageapi.entity.UserAccount;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserAccountMapper {
    @Insert("INSERT INTO user_account(username, password_hash) VALUES(#{username}, #{password_hash})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(UserAccount userAccount);

    @Select("SELECT * FROM user_account")
    List<UserAccount> findAll();

    @Delete("DELETE FROM user_account WHERE id = #{id}")
    void delete(Integer id);

    @Select("SELECT * FROM user_account WHERE username = #{username}")
    UserAccount findByUsername(String username);
}
