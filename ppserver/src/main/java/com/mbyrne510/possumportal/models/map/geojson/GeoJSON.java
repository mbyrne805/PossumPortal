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
        System.out.println("!@#(!@&#(&!@(*&#*!@");
        return this.geometry;
    };

    public GeoJSON(String idInp, String typeInp, String geometryTypeInp, ArrayList<ArrayList<ArrayList<Double>>> geometryCoordsInp) {
        this.id = idInp;
        this.type = typeInp;
        System.out.println("KAJFSKJDHJKFHSDJKFHKJSDHF");
        this.geometry = new Geometry(geometryTypeInp, geometryCoordsInp);
    }

    @Getter
    @Data
    @Builder
    @NoArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Geometry {
        private String type;
        private ArrayList<ArrayList<ArrayList<Double>>> coordinates;
        public Geometry(String typeInp, ArrayList<ArrayList<ArrayList<Double>>> coordinatesInp) {
            System.out.println("JJJJJJJJJJJ");
            type = typeInp;
            coordinates = coordinatesInp;
        }
    };
//
//    public void setGeometryType(String type) {
//        geometry.setType(type);
//    }
//
//    public void setGeometryCoordinates(ArrayList<ArrayList<ArrayList<Double>>> coordinates) {
//        geometry.setCoordinates(coordinates);
//    }
}
