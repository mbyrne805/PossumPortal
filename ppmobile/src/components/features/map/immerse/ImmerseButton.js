import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';

const ImmerseBtn = () => {
  return (
    <TouchableOpacity>
      <Button style={styles.button} labelStyle={styles.text}>
        {' '}
        Immerse{' '}
      </Button>
    </TouchableOpacity>
  );
};

export default ImmerseBtn;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#3D9970',
  },
  text: {
    color: 'white',
  },
});
