import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PHome from './screens/PHome';
import TopLogo from './components/common/TopLogo';
import * as dotenv from 'dotenv';

dotenv.config();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <NavigationContainer>
        <Stack.Navigator
          initialRouteName="PHome"
          screenOptions={{
            header: props => <TopLogo {...props} />,
          }}>
          <Stack.Screen name="PHome" component={PHome} />
          <Stack.Screen name="PortalMap" component={PortalMap} />
          <Stack.Screen name="PortalChat" component={PortalChat} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Dev" component={Dev} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <PHome />
    </SafeAreaProvider>
  );
}
