import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';
import MapboxGL from '@react-native-mapbox-gl/maps';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import {lineString as makeLineString} from '@turf/helpers';

const accessToken =
  'pk.eyJ1IjoibWJ5cm5lNTEwIiwiYSI6ImNsNDQ3MDYxODA5a2wza3A3NTdydmp1bG0ifQ.FEbWBlXPfSgUt-Aibs5bUg';
MapboxGL.setAccessToken(accessToken);
// const directionsClient = MapboxDirectionsFactory({accessToken});

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

  // const [polygons, setPolygons] = useState({
  //   type: 'Feature',
  //   geometry: {
  //     type: 'Polygon',
  //     coordinates: [
  //       [
  //         [-119.69804, 34.43206],
  //         [-119.6984, 34.43192],
  //         [-119.697609, 34.431392],
  //         [-119.69759, 34.43179],
  //       ],
  //       [
  //         [-119.682314, 34.429681],
  //         [-119.681646, 34.429227],
  //         [-119.680949, 34.429405],
  //         [-119.681827, 34.429653],
  //       ],
  //     ],
  //   },
  // });

  const [trashPolygons, setTrashPolygons] = useState("");

  // const polygonsToDisplay = polygons.map((polygon, i) => {
  //   console.log(polygon);
  //   return (
  //     <MapboxGL.ShapeSource id={`source${i}`} shape={polygon}>
  //       <MapboxGL.FillLayer id="fill" style={styles.polygonFill} />
  //       <MapboxGL.LineLayer id="line" style={styles.polygonLine} />
  //     </MapboxGL.ShapeSource>
  //   )
  // });

  useEffect(() => {
    const getData = async () => {
      const results = await axios(
        'http://10.0.2.2:8080/api/trash'
      );
      const savedTrashPolygons = [];
      results.data.forEach(result => {
        savedTrashPolygons.push(result.polygonCoords);
      });
      console.log('test');
      console.log(savedTrashPolygons);
      setTrashPolygons({
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: savedTrashPolygons,
        },
      });
    };
    getData();
  }, []);

  return (
    <MapboxGL.MapView style={styles.map}>
      <MapboxGL.Camera zoomLevel={6} centerCoordinate={center} />
      {/* {renderAnnotations()}
      {route && (
        <MapboxGL.ShapeSource id="shapeSource" shape={route}>
          <MapboxGL.LineLayer id="lineLayer" style={styles.line} />
        </MapboxGL.ShapeSource>
      )} */}
      {trashPolygons ? 
        <MapboxGL.ShapeSource id="source" shape={trashPolygons}>
          <MapboxGL.FillLayer id="fill" style={styles.polygonFill} />
          <MapboxGL.LineLayer id="line" style={styles.polygonLine} />
        </MapboxGL.ShapeSource> : <></>
      }
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
