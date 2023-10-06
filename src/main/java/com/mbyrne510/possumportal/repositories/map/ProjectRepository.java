package com.mbyrne510.possumportal.repositories.map;

import com.mbyrne510.possumportal.models.map.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepository extends MongoRepository<Project, String> {

}