package com.mbyrne510.possumportal.models.map.geojson;

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
        String addTimeInp,
        String severityInp) {
        super(idInp, typeInp, geometryTypeInp, geometryCoordsInp);
        properties = new Properties(addTimeInp, severityInp);
    }

    @Getter
    private class Properties {
        private LocalDateTime addTime;
        private String severity;
        public Properties(String addTimeInp, String severityInp) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            addTime = LocalDateTime.parse(addTimeInp, formatter);
            severity = severityInp;
        }
    }
}
