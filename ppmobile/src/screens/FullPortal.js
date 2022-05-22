import React from "react";
import { View, Text } from "react-native";
import Chat from '../components/features/chat/Chat';
import Map from '../components/features/map/Map';
import Menu from '../components/common/menu/Menu';

const FullPortal = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
  );
};

export default FullPortal;