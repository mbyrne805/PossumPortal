package com.mbyrne510.possumportal.services.map;

import com.mbyrne510.possumportal.models.map.Trash;
import com.mbyrne510.possumportal.repositories.map.TrashRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MapServiceImpl implements MapService {
    private final TrashRepository trashRepo;

    @Autowired
    public MapServiceImpl(TrashRepository trashRepo) {
        this.trashRepo = trashRepo;
    }

    @Override
    public Trash saveTrash(Trash trash) throws IllegalArgumentException {
        try {
            Trash savedTrash = trashRepo.save(trash);
            return savedTrash;
        } catch (IllegalArgumentException e) {
            throw e;
        }
    }
}
