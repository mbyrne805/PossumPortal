package com.mbyrne510.possumportal.controllers;

import com.mbyrne510.possumportal.models.map.Trash;
import com.mbyrne510.possumportal.services.map.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class MainController {
    private final MapService mapService;

    @Autowired
    public MainController(MapService mapService) {
        this.mapService = mapService;
    }

    @GetMapping("/trash")
    public ResponseEntity<List<Trash>> getAllTrash() {
        Optional<List<Trash>> trashList = mapService.getAllTrash();
        if (trashList.isPresent()) {
            return ResponseEntity.ok(trashList.get());
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/trash")
    public ResponseEntity<Trash> saveTrash(@RequestBody Trash trashPolygon) {
        try {
            Trash trashResult = mapService.saveTrash(trashPolygon);
            return ResponseEntity.ok(trashResult);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
