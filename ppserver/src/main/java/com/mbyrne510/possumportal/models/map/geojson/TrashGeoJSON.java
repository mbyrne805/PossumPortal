package com.mbyrne510.possumportal.models.map.geojson;

import lombok.*;

import java.time.ZonedDateTime;
import java.util.ArrayList;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class TrashGeoJSON extends GeoJSON {
    private Properties properties;

    public TrashGeoJSON(
        String typeInp,
        String geometryTypeInp,
        ArrayList<ArrayList<Double>> geometryCoordsInp,
        String addTimeInp,
        String severityInp)
    {
        super(typeInp, geometryTypeInp, geometryCoordsInp);
        properties = new Properties(addTimeInp, severityInp);
    }

    @Getter
    @Setter
    private class Properties {
        private ZonedDateTime addTime;
        private String severity;
        public Properties(String addTimeInp, String severityInp) {
            addTime = ZonedDateTime.parse(addTimeInp);
            severity = severityInp;
        }
    }
}
