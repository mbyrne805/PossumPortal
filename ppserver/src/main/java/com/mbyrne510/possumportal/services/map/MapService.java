package com.mbyrne510.possumportal.services.map;

import com.mbyrne510.possumportal.models.map.Trash;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface MapService {
    public Trash saveTrash(Trash trash) throws IllegalArgumentException;
    public Optional<List<Trash>> getAllTrash();
}
