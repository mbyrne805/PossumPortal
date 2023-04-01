import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(process.env.MAPBOX_ACCESS_TOKEN);

const Map = (props) => {
  const center = [-119.5489, 34.4345];

  const [trashPolygons, setTrashPolygons] = useState("");
  const [newPolygonCoords, setNewPolygonCoords] = useState([]);

  useEffect(() => {
    const getTrashPolygons = async () => {
      const results = await axios('http://10.0.2.2:8080/api/trash');
      const savedTrashPolygons = [];
      results.data.forEach(result => {
        savedTrashPolygons.push(result.polygonCoords);
      });
      setTrashPolygons({
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: savedTrashPolygons,
        },
      });
    };
    getTrashPolygons();
  }, []);

  useEffect(() => {
    if (props.polygonSaveRequested) {
      const saveTrashPolygon = async () => {
        const result = await axios.post('http://10.0.2.2:8080/api/trash', {
          polygonCoords: newPolygonCoords,
          severity: "heavy",
        });
        console.log(result.data);
        props.registerPolygonSave();
      };
      saveTrashPolygon();
    }
  });

  const saveNewPolygonCoords = (feature) => {
    let newPolygonCoordsCopy;
    if (newPolygonCoords.length === 0) {
      newPolygonCoordsCopy = [];
    } else {
      newPolygonCoordsCopy = [...newPolygonCoords];
    }
    newPolygonCoordsCopy.push(feature.geometry.coordinates);
    setNewPolygonCoords(newPolygonCoordsCopy);
  };

  const renderTrashPoints = () => {
    return newPolygonCoords.map((point, index) => (
      <MapboxGL.PointAnnotation
        id={`${index}-trashPoint`}
        coordinate={point}
        key={`${index}-trashPoint`}
        style={styles.point}>
        <View />
      </MapboxGL.PointAnnotation>
    ));
  }

  console.log([newPolygonCoords]);
  console.log(newPolygonCoords.length);

  return (
    <MapboxGL.MapView
      style={styles.map}
      onPress={feature => {
        saveNewPolygonCoords(feature);
        newPolygonCoords.length >= 2 && props.registerNewPolygon();
      }}
    >
      <MapboxGL.Camera zoomLevel={6} centerCoordinate={center} />
      {renderTrashPoints()}
      {trashPolygons ?
        <MapboxGL.ShapeSource id="source" shape={trashPolygons}>
          <MapboxGL.FillLayer id="fill" style={styles.polygonFill} />
          <MapboxGL.LineLayer id="line" style={styles.polygonLine} />
        </MapboxGL.ShapeSource> : <></>}
      {newPolygonCoords.length >= 2 ?
        <MapboxGL.ShapeSource id="source" shape={{
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [newPolygonCoords],
          }
        }}>
          <MapboxGL.FillLayer id="fill" style={styles.polygonFill} />
          <MapboxGL.LineLayer id="line" style={styles.polygonLine} />
        </MapboxGL.ShapeSource> : <></>}
    </MapboxGL.MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  line: {
    lineWidth: 5,
    lineJoin: 'bevel',
    lineColor: '#ff0000',
  },
  map: {
    flex: 1,
  },
  point: {
    height: 30,
    width: 30,
    backgroundColor: '#00cccc',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 3,
  },
  polygonFill: {
    fillColor: 'red',
    fillOpacity: 0.5,
  },
  polygonLine: {
    lineColor: 'black',
    lineWidth: 2,
  },
});
