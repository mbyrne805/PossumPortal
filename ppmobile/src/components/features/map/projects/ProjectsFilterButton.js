import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ToggleButton} from 'react-native-paper';

const ProjectsFilterButton = ({callback, text, id, selectedIndices}) => {
  const clicked = selectedIndices.includes(id);
  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: 20,
          borderColor: '#6e98db',
          borderWidth: 2,
          padding: 10,
          marginBottom: 5,
        },
        {backgroundColor: clicked ? '#6e98db' : 'white'},
      ]}
      onPress={() => {
        callback(id);
      }}>
      <Text style={{color: clicked ? 'white' : '#6e98db', textAlign: 'center'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ProjectsFilterButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6e98db',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    color: 'white',
  },
});
