import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ImmerseButton from '../components/features/map/immerse/ImmerseButton';
import Map from '../components/features/map/Map';
import ProjectSaveButton from '../components/features/map/projects/ProjectSaveButton';
import ProjectsButton from '../components/features/map/projects/ProjectsButton';
import ProjectsFilter from '../components/features/map/projects/ProjectsFilter';
import TopLogo from '../components/common/TopLogo';

const PHome = () => {
  const [newPolygon, setNewPolygon] = useState(false);
  const [polygonSaveRequested, setPolygonSaveRequested] = useState(false);
  const [polygonSave, setPolygonSave] = useState(false);

  const registerNewPolygon = () => {
    setNewPolygon(true);
  };

  const registerPolygonSaveRequest = () => {
    setPolygonSaveRequested(true)
  }

  const registerPolygonSave = () => {
    console.log('polygon saved');
    setPolygonSaveRequested(false);
    setPolygonSave(true);
  }

  return (
    <View style={styles.container}>
      <Map 
        registerNewPolygon={registerNewPolygon}
        polygonSaveRequested={polygonSaveRequested}
        registerPolygonSave={registerPolygonSave}/>
      <View style={styles.logo}>
        {newPolygon ? <ProjectSaveButton onPress={registerPolygonSaveRequest}/> : <TopLogo />}
      </View>
      <View style={styles.projects}>
        <ProjectsButton />
      </View>
      <ProjectsFilter
        data={[{title: 'Trash'}, {title: 'Fire'}, {title: 'Eco'}]}
      />
    </View>
  );
};

export default PHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
  },
  immerse: {
    position: 'absolute',
    left: 25,
    bottom: 50,
  },
  projectSaveButton: {
    position: 'absolute',
    right: 25,
    bottom: 100,
  },
  projects: {
    position: 'absolute',
    right: 25,
    bottom: 50,
  },
  projectsFilter: {
    position: 'absolute',
    left: 10,
  },
});
