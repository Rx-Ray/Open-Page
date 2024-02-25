package com.openlab.openpageapi.service;

import com.openlab.openpageapi.entity.Announcement;

import java.util.List;

public interface AnnouncementService {
    Announcement createAnnouncement(Announcement announcement);
    List<Announcement> getAllAnnouncements();
    void deleteAnnouncement(Integer id);
}
