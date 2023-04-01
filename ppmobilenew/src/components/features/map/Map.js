import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(process.env.MAPBOX_ACCESS_TOKEN);

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
