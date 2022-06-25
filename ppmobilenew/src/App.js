import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PHome from './screens/PHome';
import TopMenu from './components/common/TopMenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <View style={styles.container}>
          <Text>Hello</Text>
          <StatusBar style="auto" />
        </View> */}
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: props => <TopMenu {...props} />,
          }}>
          <Stack.Screen name="Home" component={PHome} />
          {/* <Stack.Screen name="PortalMap" component={PortalMap} />
          <Stack.Screen name="PortalChat" component={PortalChat} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Dev" component={Dev} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
