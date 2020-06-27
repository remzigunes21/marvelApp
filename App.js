import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CharcterSearchScreen from './app/screens/CharctersScreen';
import DetailScreen from './app/screens/DetailScreen';

const TabNavigation = createBottomTabNavigator();

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={CharcterSearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <SearchStack.Screen
        name="Detail"
        component={DetailScreen}
        options={() => ({
          headerShown: false,
          // title: route.params?.title || "",
          // headerStyle: {
          //   backgroundColor: theme.colors.softRed,
          //   shadowColor: "transparent"
          // },
          // headerLeft: () => (
          //   <Button px={10} height="100%" onPress={() => navigation.navigate("Search")}>
          //     <Left color={theme.colors.textDark} />
          //   </Button>
          // ),
          // headerRight: () => (
          //   <Button px={10} height="100%" onPress={() => navigation.navigate("Search")}>
          //     <More color={theme.colors.textDark} />
          //   </Button>
          // )
        })}
      />
    </SearchStack.Navigator>
  );
}

function App() {
  return <NavigationContainer>{SearchStackScreen()}</NavigationContainer>;
}

export default App;
