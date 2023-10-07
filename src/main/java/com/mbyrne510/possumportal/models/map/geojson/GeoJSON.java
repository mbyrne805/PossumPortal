package com.mbyrne510.possumportal.models.map.geojson;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mongodb.client.model.geojson.Geometry;
import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GeoJSON {
    @Id
    private String id;
    private String type;
    private Geometry geometry;
    public Geometry getGeometry() {
        return this.geometry;
    };

    public GeoJSON(String idInp, String typeInp, String geometryTypeInp, ArrayList<ArrayList<ArrayList<Double>>> geometryCoordsInp) {
        this.id = idInp;
        this.type = typeInp;
        this.geometry = new Geometry(geometryCoordsInp, geometryTypeInp);
    }

    @Getter
    @Data
    @Builder
    @NoArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Geometry {
        private ArrayList<ArrayList<ArrayList<Double>>> coordinates;
        private String type;
        public Geometry(ArrayList<ArrayList<ArrayList<Double>>> coordinatesInp, String typeInp) {
            coordinates = coordinatesInp;
            type = typeInp;
        }
    };
}
