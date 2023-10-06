package com.mbyrne510.possumportal.controllers;

import com.mbyrne510.possumportal.models.map.geojson.ProjectGeoJSON;
import com.mbyrne510.possumportal.services.map.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class MainController {
    private final MapService mapService;

    @Autowired
    public MainController(MapService mapService) {
        this.mapService = mapService;
    }

    @GetMapping("/project")
    public ResponseEntity<Optional<HashMap<String, ProjectGeoJSON>>> getAllProjects() {
        Optional<HashMap<String, ProjectGeoJSON>> trashList = mapService.getAllProjects();
        if (trashList.isPresent()) {
            return ResponseEntity.ok(trashList);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/project")
    public ResponseEntity<ProjectGeoJSON> saveProject(@RequestBody ProjectGeoJSON projectGeoJSON) {
        try {
            ProjectGeoJSON trashResult = mapService.saveProject(projectGeoJSON);
            return ResponseEntity.ok(trashResult);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/project/{id}")
    public void deleteProject(@PathVariable String id) {
        try {
            mapService.deleteProject(id);
        } catch (IllegalArgumentException e) {
            return;
        }
    }

    @DeleteMapping("/project")
    public void deleteAll() {
        try {
            mapService.deleteAllProjects();
        } catch (IllegalArgumentException e) {
            return;
        }
    }
}
