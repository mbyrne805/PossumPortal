import React from 'react';
import { StyleSheet, View } from 'react-native';

const Chat = (props) => {
  return (
    <View style={styles.chat}/>
  );
};

const styles = StyleSheet.create({
  chat: {
    flex: 1,
    backgroundColor: 'powderblue'
  }
})

export default Chat;