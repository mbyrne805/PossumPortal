import React from 'react';
import {StyleSheet, View} from 'react-native';
// import Chat from '../components/features/chat/Chat';
import Map from '../components/features/map/Map';
import TopLogo from '../components/common/TopLogo';

const PHome = () => {
  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.logo}>
        <TopLogo />
      </View>
      {/* <Chat /> */}
    </View>
  );
};

export default PHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
  },
});
