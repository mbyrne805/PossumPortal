package com.mbyrne510.possumportal.services.map;

import com.mbyrne510.possumportal.models.map.Trash;
import com.mbyrne510.possumportal.models.map.geojson.TrashGeoJSON;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public interface MapService {
    public Trash saveTrash(Trash trash) throws IllegalArgumentException;
    public Optional<HashMap<String, TrashGeoJSON>> getAllTrash();
}
