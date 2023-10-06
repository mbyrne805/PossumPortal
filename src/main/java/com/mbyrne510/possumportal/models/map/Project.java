package com.mbyrne510.possumportal.models.map;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class Project {
    @Id
    private String id;
    private String projectName;
    private ArrayList<ArrayList<ArrayList<Double>>> polygonCoords;
    private String date;
    private String user;
    private String details;
    private ArrayList<String> tags;
}