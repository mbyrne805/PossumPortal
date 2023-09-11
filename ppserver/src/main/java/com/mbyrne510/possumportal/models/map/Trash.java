package com.mbyrne510.possumportal.models.map;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.lang.reflect.Array;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class Trash {
    @Id
    private String id;
    private String projectName;
    private ArrayList<ArrayList<ArrayList<Double>>> polygonCoords;
    private String date;
    private String user;
    private String notes;
}