package com.mbyrne510.possumportal.services.map;

import com.mbyrne510.possumportal.models.map.Trash;
import com.mbyrne510.possumportal.models.map.geojson.GeoJSON;
import com.mbyrne510.possumportal.models.map.geojson.TrashGeoJSON;
import com.mbyrne510.possumportal.repositories.map.TrashRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
    public TrashGeoJSON saveTrash(TrashGeoJSON trashGeoJSON) throws IllegalArgumentException {
        Trash trash = new Trash();
        trash.setId(trashGeoJSON.getId());
        trash.setNotes(trashGeoJSON.getProperties().getNotes());
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd, HH:mm:ss");
        String formatted = now.format(formatter);
        trash.setDate(formatted);
        trash.setUser(trashGeoJSON.getProperties().getUser());
        trash.setPolygonCoords(trashGeoJSON.getGeometry().getCoordinates());
        System.out.println(trash.getUser());
        try {
            trashRepo.save(trash);
            return trashGeoJSON;
        } catch (IllegalArgumentException e) {
            throw e;
        }
    }

    @Override
    public Optional<HashMap<String, TrashGeoJSON>> getAllTrash() {
        HashMap<String, TrashGeoJSON> trashResults = new HashMap<>();
        List<Trash> trashList = trashRepo.findAll();
        List<TrashGeoJSON> trashGeoJSONs = new ArrayList<>(trashList.size());
        System.out.println(trashGeoJSONs.size());
        for (int i = 0; i < trashList.size(); i++) {
            trashResults.put(trashList.get(i).getId(), new TrashGeoJSON(
                trashList.get(i).getId(),
                "Feature",
                "Polygon",
                trashList.get(i).getPolygonCoords(),
                trashList.get(i).getNotes(),
                trashList.get(i).getUser(),
                trashList.get(i).getDate()
            ));
        }
        return Optional.of(trashResults);
    }

    @Override
    public void deleteTrash(String id) {
        try {
            trashRepo.deleteById(id);
        } catch (IllegalArgumentException e) {
            throw e;
        }
    }
}
