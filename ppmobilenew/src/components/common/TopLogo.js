import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, Surface, Button, Text} from 'react-native-paper';
import Svg, {Path, Ellipse} from 'react-native-svg';
import {createStackNavigator} from '@react-navigation/stack';

// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

function TopLogo({navigation, back}) {
  return (
    // <Appbar.Header>
    //   {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
    //   <Appbar.Action icon="magnify" onPress={() => {}} />
    //   <Appbar.Content
    //     style={{alignItems: 'center'}}
    //     title={
    //       <Text style={{fontSize: 30, color: 'white', fontWeight: '500'}}>
    //         Possum Portal
    //       </Text>
    //     }
    //   />
    //   <Appbar.Action /*icon={MORE_ICON}*/ onPress={() => {}} />
    // </Appbar.Header>
    <Surface style={styles.surface} elevation={5}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="155 97 150 150"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision">
        <Path
          transform="matrix(1.14458 0 0 1.16 235.5 199)"
          fill="none"
          stroke="#3f5787"
          strokeWidth={3}
          d="m-41.5 25 83-50"
        />
        <Path
          fill="none"
          stroke="#3f5787"
          strokeWidth={3}
          d="m198 120 1 100M235.5 120v79"
        />
        <Ellipse
          rx={18.75}
          ry={17}
          transform="matrix(.89174 0 0 .93868 216.762 134.44)"
          fill="#d2dbed"
        />
        <Ellipse
          rx={18.75}
          ry={17}
          transform="matrix(.89174 0 0 .93868 254.174 134.44)"
          fill="#d2dbed"
        />
      </Svg>
    </Surface>
  );
}

export default TopLogo;

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    height: 75,
    width: 75,
    border: 8,
    backgroundColor: '#3D9970',
  },
});
