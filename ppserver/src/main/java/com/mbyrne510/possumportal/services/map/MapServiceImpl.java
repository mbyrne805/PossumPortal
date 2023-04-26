package com.mbyrne510.possumportal.services.map;

import com.mbyrne510.possumportal.models.map.Trash;
import com.mbyrne510.possumportal.models.map.geojson.GeoJSON;
import com.mbyrne510.possumportal.models.map.geojson.TrashGeoJSON;
import com.mbyrne510.possumportal.repositories.map.TrashRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

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

    @Override
    public Optional<HashMap<String, TrashGeoJSON>> getAllTrash() {
        HashMap<String, TrashGeoJSON> trashResults = new HashMap<>();
        List<Trash> trashList = trashRepo.findAll();
        List<TrashGeoJSON> trashGeoJSONs = new ArrayList<>(trashList.size());

        for (int i = 0; i < trashList.size(); i++) {
            trashGeoJSONs.set(i, new TrashGeoJSON(
                "Feature",
                "Polygon",
                trashList.get(i).getPolygonCoords(),
                trashList.get(i).getDate(),
                trashList.get(i).getSeverity()
                ));
        }
        for (int i = 0; i < trashList.size(); i++) {
            trashResults.put(trashList.get(i).getId(), trashGeoJSONs.get(i));
        }
        return Optional.of(trashResults);
    }
}
