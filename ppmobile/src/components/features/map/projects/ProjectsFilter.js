import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ProjectsFilterButton from './ProjectsFilterButton';

const ProjectsFilter = ({data, onValueChange}) => {
  let [selectedIndices, setSelectedIndices] = useState([]);

  return (
    <View style={styles.projectsFilter}>
      {data.map((x, i) => (
        <ProjectsFilterButton
          text={x.title}
          key={i}
          id={i}
          selectedIndices={selectedIndices}
          callback={id => {
            if (selectedIndices.includes(id)) {
              selectedIndices.splice(selectedIndices.indexOf(id), 1);
            } else {
              selectedIndices.push(id);
            }
            setSelectedIndices(selectedIndices);
            setSelectedIndices([id]);
          }}
        />
      ))}
    </View>
  );
};

export default ProjectsFilter;

const styles = StyleSheet.create({
  projectsFilter: {
    position: 'absolute',
    left: 10,
  },
});
