import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, Button, Text} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';

// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

function TopMenu({navigation, back}) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Content
        style={{alignItems: 'center'}}
        title={
          <Text style={{fontSize: 30, color: 'white', fontWeight: '500'}}>
            Possum Portal
          </Text>
        }
      />
      <Appbar.Action /*icon={MORE_ICON}*/ onPress={() => {}} />
    </Appbar.Header>
  );
}

export default TopMenu;
