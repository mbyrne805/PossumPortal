import React from 'react';
import {StyleSheet, View} from 'react-native';
// import Chat from '../components/features/chat/Chat';
import ImmerseButton from '../components/features/map/immerse/ImmerseButton';
import Map from '../components/features/map/Map';
import ProjectsButton from '../components/features/map/projects/ProjectsButton';
import ProjectsFilter from '../components/features/map/projects/ProjectsFilter';
import TopLogo from '../components/common/TopLogo';

const PHome = () => {
  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.logo}>
        <TopLogo />
      </View>
      <View style={styles.immerse}>
        <ImmerseButton />
      </View>
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
