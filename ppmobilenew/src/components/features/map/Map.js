import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibWJ5cm5lNTEwIiwiYSI6ImNsNDQ3MDYxODA5a2wza3A3NTdydmp1bG0ifQ.FEbWBlXPfSgUt-Aibs5bUg',
);

const Map = props => {
  const [coordinates] = useState([-122.23432, 37.23432]);
  return (
    // <View style={styles.page}>
    //   <View style={styles.container}>
    <MapboxGL.MapView>
      <MapboxGL.Camera centerCoordinate={coordinates} />
      {/* <MapboxGL.PointAnnotation coordinate={coordinates} /> */}
    </MapboxGL.MapView>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 2,
  },
});

export default Map;
