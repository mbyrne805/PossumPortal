package com.mbyrne510.possumportal.services.map;

import com.mbyrne510.possumportal.models.map.Project;
import com.mbyrne510.possumportal.models.map.geojson.ProjectGeoJSON;
import com.mbyrne510.possumportal.repositories.map.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class MapServiceImpl implements MapService {
    private final ProjectRepository projectRepo;

    @Autowired
    public MapServiceImpl(ProjectRepository projectRepo) {
        this.projectRepo = projectRepo;
    }

    @Override
    public ProjectGeoJSON saveProject(ProjectGeoJSON projectGeoJSON) throws IllegalArgumentException {
        Project project = new Project();
        project.setId(projectGeoJSON.getId());
        project.setDetails(projectGeoJSON.getProperties().getDetails());
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd, HH:mm:ss");
        String formatted = now.format(formatter);
        project.setDate(formatted);
        project.setUser(projectGeoJSON.getProperties().getUser());
        project.setPolygonCoords(projectGeoJSON.getGeometry().getCoordinates());
//        System.out.println(project.getUser());
        project.setProjectName(projectGeoJSON.getProperties().getProjectName());
        project.setTags(projectGeoJSON.getProperties().getTags());
        System.out.println(project.getTags());
        try {
            projectRepo.save(project);
            return projectGeoJSON;
        } catch (IllegalArgumentException e) {
            throw e;
        }
    }

    @Override
    public Optional<HashMap<String, ProjectGeoJSON>> getAllProjects() {
        HashMap<String, ProjectGeoJSON> trashResults = new HashMap<>();
        List<Project> projectList = projectRepo.findAll();
        List<ProjectGeoJSON> projectGeoJSONS = new ArrayList<>(projectList.size());
        for (int i = 0; i < projectList.size(); i++) {
            trashResults.put(projectList.get(i).getId(), new ProjectGeoJSON(
                projectList.get(i).getId(),
                "Feature",
                "Polygon",
                projectList.get(i).getPolygonCoords(),
                projectList.get(i).getDetails(),
                projectList.get(i).getUser(),
                projectList.get(i).getDate(),
                projectList.get(i).getProjectName(),
                projectList.get(i).getTags()
            ));
        }
        return Optional.of(trashResults);
    }

    @Override
    public void deleteProject(String id) {
        try {
            projectRepo.deleteById(id);
        } catch (IllegalArgumentException e) {
            throw e;
        }
    }

    @Override
    public void deleteAllProjects() {
        try {
            projectRepo.deleteAll();
        } catch (IllegalArgumentException e) {

        }
    }
}
