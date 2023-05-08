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
        String severityInp) {
        super(idInp, typeInp, geometryTypeInp, geometryCoordsInp);
        this.properties = new Properties(severityInp);
    }

    @Getter
    @Data
    @Builder
    @NoArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Properties {
        private String severity;

        private Properties(String severityInp) {
            severity = severityInp;
        }
    }
}
