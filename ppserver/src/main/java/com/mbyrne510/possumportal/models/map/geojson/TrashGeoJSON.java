package com.mbyrne510.possumportal.models.map.geojson;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TrashGeoJSON extends GeoJSON {
    private Properties properties;

    public TrashGeoJSON(
        String idInp,
        String typeInp,
        String geometryTypeInp,
        ArrayList<ArrayList<ArrayList<Double>>> geometryCoordsInp,
        String notesInp,
        String userInp,
        String dateInp,
        String projectNameInp) {
        super(idInp, typeInp, geometryTypeInp, geometryCoordsInp);
        this.properties = new Properties(notesInp, userInp, dateInp, projectNameInp);
    }

    @Getter
    @Data
    @Builder
    @NoArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Properties {
        private String notes;
        private String user;
        private String date;
        private String projectName;

        private Properties(String notesInp, String userInp, String dateInp, String projectNameInp) {
            notes = notesInp;
            user = userInp;
            date = dateInp;
            projectName = projectNameInp;
        }
    }
}
