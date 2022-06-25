import React from 'react';
import {StyleSheet, View} from 'react-native';
// import Chat from '../components/features/chat/Chat';
import Map from '../components/features/map/Map';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibWJ5cm5lNTEwIiwiYSI6ImNsNDQ3MDYxODA5a2wza3A3NTdydmp1bG0ifQ.FEbWBlXPfSgUt-Aibs5bUg',
);

const PHome = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Map />
        {/* <Chat /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
});

export default PHome;
