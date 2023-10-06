package com.mbyrne510.possumportal;

import com.mbyrne510.possumportal.models.map.Project;
import com.mbyrne510.possumportal.repositories.map.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
@EnableMongoRepositories
public class PossumPortalApplication implements CommandLineRunner {
	@Autowired
	private ProjectRepository trashRepo;

	public static void main(String[] args) {
		SpringApplication.run(PossumPortalApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Current trash results:");
		for (Project projectResult : trashRepo.findAll()) {
			System.out.println(projectResult);
		}
	}
}
