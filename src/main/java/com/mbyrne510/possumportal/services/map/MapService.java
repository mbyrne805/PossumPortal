package com.mbyrne510.possumportal.services.map;

import com.mbyrne510.possumportal.models.map.geojson.ProjectGeoJSON;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;

@Service
public interface MapService {
    public ProjectGeoJSON saveProject(ProjectGeoJSON trash) throws IllegalArgumentException;
    public Optional<HashMap<String, ProjectGeoJSON>> getAllProjects();

    void deleteProject(String trashGeoJSONId);

    void deleteAllProjects();
}