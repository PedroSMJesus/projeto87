import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expi-status-bar';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";
import { View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MeteorScreen/>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
 });

 const Stack = createStackNavigator();

 function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ hearderShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Isslocation" component={IssLocationScreen} />
        <Stack.Screen name="Meteors" component={MeteorScreen} />
        <Stack.Screen name="Updates" component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
 export default App;

