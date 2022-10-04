import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';

const ProjectSaveButton = (props) => (
  <TouchableOpacity>
    <Button
      style={styles.button}
      labelStyle={styles.text}
      onPress={() => props.onPress()}>
      {' '}
      Save to db?{' '}
    </Button>
  </TouchableOpacity>
);

export default ProjectSaveButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3D9970',
  },
  text: {
    color: 'white',
  },
});