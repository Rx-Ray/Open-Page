package BulletinBoard;

import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface AnnouncementMapper {
    @Select("SELECT * FROM announcements")
    List<Announcement> getAllAnnouncements();

    @Select("SELECT * FROM announcements WHERE id = #{id}")
    Announcement getAnnouncementById(Long id);

    @Insert("INSERT INTO announcements(title, cover, content) VALUES(#{title}, #{cover}, #{content})")
    void createAnnouncement(Announcement announcement);

    @Update("UPDATE announcements SET title = #{title}, cover = #{cover}, content = #{content} WHERE id = #{id}")
    void updateAnnouncement(Announcement announcement);

    @Delete("DELETE FROM announcements WHERE id = #{id}")
    void deleteAnnouncement(Long id);
}
