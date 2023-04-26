package com.mbyrne510.possumportal.models.map.geojson;

import com.mongodb.client.model.geojson.Geometry;
import lombok.*;

import java.util.ArrayList;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class GeoJSON {
    private String type;
    private Geometry geometry;

    public GeoJSON(String typeInp, String geometryTypeInp, ArrayList<ArrayList<Double>> geometryCoordsInp) {
        type = typeInp;
        geometry = new Geometry(geometryTypeInp, geometryCoordsInp);
    }

    @Getter
    @Setter
    private class Geometry {
        private String type;
        private ArrayList<ArrayList<Double>> coordinates;
        public Geometry(String typeInp, ArrayList<ArrayList<Double>> coordinatesInp) {
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
