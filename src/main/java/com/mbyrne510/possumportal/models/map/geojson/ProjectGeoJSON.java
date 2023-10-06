package com.mbyrne510.possumportal.models.map.geojson;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.util.ArrayList;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectGeoJSON extends GeoJSON {
    private Properties properties;

    public ProjectGeoJSON(
        String idInp,
        String typeInp,
        String geometryTypeInp,
        ArrayList<ArrayList<ArrayList<Double>>> geometryCoordsInp,
        String notesInp,
        String userInp,
        String dateInp,
        String projectNameInp,
        ArrayList<String> tagsInp
        ) {
        super(idInp, typeInp, geometryTypeInp, geometryCoordsInp);
        this.properties = new Properties(
            notesInp,
            userInp,
            dateInp,
            projectNameInp,
            tagsInp);
    }

    @Getter
    @Data
    @Builder
    @NoArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Properties {
        private String details;
        private String user;
        private String date;
        private String projectName;
        private ArrayList<String> tags;

        private Properties(String detailsInp, String userInp, String dateInp, String projectNameInp, ArrayList<String> tagsInp) {
            details = detailsInp;
            user = userInp;
            date = dateInp;
            projectName = projectNameInp;
            tags = tagsInp;
        }
    }
}
