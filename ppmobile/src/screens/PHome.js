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

  const registerPolygonSave = () => {
    setPolygonToSave(true);
  };

  return (
    <View style={styles.container}>
      <Map registerPolygonSave={registerPolygonSave}/>
      <View style={styles.logo}>
        <TopLogo />
      </View>
      {/* <View style={styles.immerse}>
        <ImmerseButton />
      </View> */}
      {
        polygonToSave ? 
        <View style={styles.projectSaveButton}>
          <ProjectSaveButton />
        </View> :
        <></>
      }
      <View style={styles.projects}>
        <ProjectsButton />
      </View>
      <ProjectsFilter
        data={[{title: 'Trash'}, {title: 'Fire'}, {title: 'Eco'}]}
      />
      {/* <Chat /> */}
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
    bottom: 90,
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
