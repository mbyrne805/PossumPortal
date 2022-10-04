import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';
import MapboxGL from '@rnmapbox/maps';
import {lineString as makeLineString} from '@turf/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibWJ5cm5lNTEwIiwiYSI6ImNsNDQ3MDYxODA5a2wza3A3NTdydmp1bG0ifQ.FEbWBlXPfSgUt-Aibs5bUg');

MapboxGL.setWellKnownTileServer('Mapbox');

const Map = (props) => {
  const center = [-119.5489, 34.4345];

  const [trashPolygons, setTrashPolygons] = useState("");
  const [trashCoords, setTrashCoords] = useState([]);

  useEffect(() => {
    const getTrashData = async () => {
      const results = await axios(
        'http://10.0.2.2:8080/api/trash'
      );
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
    getTrashData();
  }, []);

  const saveTrashCoords = (feature) => {
    let trashCoordsCopy;
    if (trashCoords.length === 0) {
      trashCoordsCopy = [];
    } else {
      trashCoordsCopy = [...trashCoords];
    }
    trashCoordsCopy.push(feature.geometry.coordinates);
    setTrashCoords(trashCoordsCopy);
  };

  const renderTrashPoints = () => {
    return trashCoords.map((point, index) => (
        <MapboxGL.PointAnnotation
          id={`${index}-trashPoint`}
          coordinate={point}
          key={`${index}-trashPoint`}
          style={styles.point}>
          <View />
        </MapboxGL.PointAnnotation>
    ));
  }

  console.log(trashCoords.length);

  return (
    <MapboxGL.MapView
      style={styles.map}
      onPress={feature => {
        saveTrashCoords(feature);
        // trashCoords.length >= 2 && props.registerPolygonSave();
      }}
    >
      <MapboxGL.Camera zoomLevel={6} centerCoordinate={center} />
      {renderTrashPoints()}
      {/* {trashPolygons ?
        <MapboxGL.ShapeSource id="source" shape={trashPolygons}>
          <MapboxGL.FillLayer id="fill" style={styles.polygonFill} />
          <MapboxGL.LineLayer id="line" style={styles.polygonLine} />
        </MapboxGL.ShapeSource> : <></>} */}
      {trashCoords.length >= 3 ?
        <MapboxGL.ShapeSource id="source" shape={{
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: trashCoords,
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
