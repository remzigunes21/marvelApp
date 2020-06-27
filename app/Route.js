import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CharctersScreen from './screens/CharctersScreen';
import DetailScreen from './screens/DetailScreen';

const TabNavigation = createBottomTabNavigator();

const Stack = createStackNavigator();

function Tabs() {
  return (
    <TabNavigation.Navigator>
      <TabNavigation.Screen name="Characters" component={CharctersScreen} />
      <TabNavigation.Screen name="Detail" component={DetailScreen} />
    </TabNavigation.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Characters" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
