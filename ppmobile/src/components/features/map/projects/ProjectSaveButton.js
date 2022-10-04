import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';

const ProjectSaveButton = () => (
  <TouchableOpacity>
    <Button style={styles.button} labelStyle={styles.text}>
      {' '}
      Save to db?{' '}
    </Button>
  </TouchableOpacity>
);

export default ProjectSaveButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#34EB83',
  },
  text: {
    color: 'white',
  },
});