import {React} from 'react';
import {StyleSheet, View} from 'react-native';
// import MapboxGL from '@react-native-mapbox-gl/maps';
import {FAB} from 'react-native-paper';

// MapboxGL.setAccessToken(
//   'pk.eyJ1IjoibWJ5cm5lNTEwIiwiYSI6ImNsNDQ3MDYxODA5a2wza3A3NTdydmp1bG0ifQ.FEbWBlXPfSgUt-Aibs5bUg',
// );

const Map = props => {
  // const [coordinates] = useState([-122.2134324, 35.234234]);
  return <FAB style={styles.fab} icon="plus" />;
  // return (
  //   <View style={styles.map}>
  //     <FAB style={styles.fab} icon="plus" />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  map: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  fab: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
});

export default Map;
