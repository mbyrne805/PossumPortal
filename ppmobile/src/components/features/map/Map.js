import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import {lineString as makeLineString} from '@turf/helpers';

MapboxGL.setAccessToken(process.env.MAPBOX_ACCESS_TOKEN);

const Map = () => {
  // const startPoint = [-119.6982, 34.4208];
  // const endPoint = [-119.691, 34.4208];
  // const startEndPoints = [startPoint, endPoint];
  const center = [-119.5489, 34.4345];

  // const [route, setRoute] = useState(null);

  // useEffect(() => {
  //   fetchRoute();
  // });

  // const renderAnnotations = () => {
  //   return startEndPoints.map((point, index) => (
  //     <MapboxGL.PointAnnotation
  //       key={`${index}-PointAnnotation`}
  //       id={`${index}-PointAnnotation`}
  //       coordinate={point}>
  //       <View style={styles.point} />
  //     </MapboxGL.PointAnnotation>
  //   ));
  // };

  // const fetchRoute = async () => {
  //   const reqOptions = {
  //     waypoints: [{coordinates: startPoint}, {coordinates: endPoint}],
  //     profile: 'driving-traffic',
  //     geometries: 'geojson',
  //   };
  //   const res = await directionsClient.getDirections(reqOptions).send();
  //   const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
  //   setRoute(newRoute);
  // };

  const [polygon, setPolygon] = useState({
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-119.69804, 34.43206],
          [-119.6984, 34.43192],
          [-119.697609, 34.431392],
          [-119.69759, 34.43179],
        ],
      ],
    },
  });

  return (
    <MapboxGL.MapView style={styles.map}>
      <MapboxGL.Camera zoomLevel={6} centerCoordinate={center} />
      {/* {renderAnnotations()}
      {route && (
        <MapboxGL.ShapeSource id="shapeSource" shape={route}>
          <MapboxGL.LineLayer id="lineLayer" style={styles.line} />
        </MapboxGL.ShapeSource>
      )} */}
      <MapboxGL.ShapeSource id="source" shape={polygon}>
        <MapboxGL.FillLayer id="fill" style={styles.polygonFill} />
        <MapboxGL.LineLayer id="line" style={styles.polygonLine} />
      </MapboxGL.ShapeSource>
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
