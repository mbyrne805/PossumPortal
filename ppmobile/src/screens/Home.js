import React from "react";
import { StyleSheet, View } from "react-native";
import Chat from '../components/features/chat/Chat';
import Map from '../components/features/map/Map';

const Home = () => {
  return (
    <View
      style={styles.home}
    >
      <Map/>
      <Chat/>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 2,
    backgroundColor: 'skyblue'
  },
  fab: {
    position: 'absolute',
    bottom: 10,
    left: 10
  }
})

export default Home;