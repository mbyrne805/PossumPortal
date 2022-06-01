import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { FAB } from 'react-native-paper';

const Map = (props) => {
  return (
    <View style={styles.map}>
      <FAB
        style={styles.fab}
        icon="plus"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 2,
    backgroundColor: 'skyblue'
  },
  fab: {
    position: 'absolute',
    bottom: 10,
    left: 10
  }
})

export default Map;