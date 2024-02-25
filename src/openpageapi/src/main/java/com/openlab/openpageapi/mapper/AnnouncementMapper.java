package com.openlab.openpageapi.mapper;

import com.openlab.openpageapi.entity.Announcement;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface AnnouncementMapper {
    @Insert("INSERT INTO bulletinboard(date, title, content, file) VALUES(#{date}, #{title}, #{content}, #{file})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Announcement announcement);

    @Select("SELECT * FROM bulletinboard")
    List<Announcement> findAll();

    @Delete("DELETE FROM bulletinboard WHERE id = #{id}")
    void delete(Integer id);
}
