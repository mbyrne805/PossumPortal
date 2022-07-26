import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';

const ProjectButton = () => (
  <TouchableOpacity>
    <Button style={styles.button} labelStyle={styles.text}>
      {' '}
      Projects{' '}
    </Button>
  </TouchableOpacity>
);

export default ProjectButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3D9970',
  },
  text: {
    color: 'white',
  },
});
