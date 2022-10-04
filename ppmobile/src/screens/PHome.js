import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
// import Chat from '../components/features/chat/Chat';
import ImmerseButton from '../components/features/map/immerse/ImmerseButton';
import Map from '../components/features/map/Map';
import ProjectSaveButton from '../components/features/map/projects/ProjectSaveButton';
import ProjectsButton from '../components/features/map/projects/ProjectsButton';
import ProjectsFilter from '../components/features/map/projects/ProjectsFilter';
import TopLogo from '../components/common/TopLogo';

const PHome = () => {
  const [polygonToSave, setPolygonToSave] = useState(false);
  const [polygonSaveRequested, setPolygonSaveRequested] = useState(false);

  const registerPolygonSave = () => {
    setPolygonToSave(true);
  };

  const registerPolygonSaveRequest = () => {
    console.log('test');
    setPolygonSaveRequested(true)
  }

  return (
    <View style={styles.container}>
      <Map 
        registerPolygonSave={registerPolygonSave}
        polygonSaveRequested={polygonSaveRequested}/>
      <View style={styles.logo}>
        {polygonToSave ? <ProjectSaveButton onPress={registerPolygonSaveRequest}/> : <TopLogo />}
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
