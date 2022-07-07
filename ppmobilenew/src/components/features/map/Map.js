import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibWJ5cm5lNTEwIiwiYSI6ImNsNDQ3MDYxODA5a2wza3A3NTdydmp1bG0ifQ.FEbWBlXPfSgUt-Aibs5bUg',
);

const Map = () => {
  const [coordinates] = useState([-119.6982, 34.4208]);

  return (
    <MapboxGL.MapView style={styles.map}>
      <MapboxGL.Camera zoomLevel={6} centerCoordinate={coordinates} />
    </MapboxGL.MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
