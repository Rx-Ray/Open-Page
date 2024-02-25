package com.openlab.openpageapi.service;

import com.openlab.openpageapi.entity.Announcement;
import com.openlab.openpageapi.mapper.AnnouncementMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {
    @Autowired
    private AnnouncementMapper announcementMapper;

    @Override
    public Announcement createAnnouncement(Announcement announcement) {
        announcementMapper.insert(announcement);
        return announcement;
    }

    @Override
    public List<Announcement> getAllAnnouncements() {
        return announcementMapper.findAll();
    }

    @Override
    public void deleteAnnouncement(Integer id) {
        announcementMapper.delete(id);
    }
}
