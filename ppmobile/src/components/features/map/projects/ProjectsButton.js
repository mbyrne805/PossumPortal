import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';

const ProjectsButton = () => (
  <TouchableOpacity>
    <Button style={styles.button} labelStyle={styles.text}>
      {' '}
      Projects{' '}
    </Button>
  </TouchableOpacity>
);

export default ProjectsButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3D9970',
  },
  text: {
    color: 'white',
  },
});
