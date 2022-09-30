package com.mbyrne510.possumportal.repositories.map;

import java.util.List;

import com.mbyrne510.possumportal.models.map.Trash;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TrashRepository extends MongoRepository<Trash, String> {

}