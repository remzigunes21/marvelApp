import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import CharcterSearchScreen from './app/screens/CharctersScreen';
import DetailScreen from './app/screens/DetailScreen';
import Contact from './app/screens/Contact';
import About from './app/screens/About';

const SearchStack = createStackNavigator();

const DraverStack = createStackNavigator();

const Drawer = createDrawerNavigator();

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
          headerShown: true,
        })}
      />
    </SearchStack.Navigator>
  );
}

function ContactStackScreen() {
  return (
    <DraverStack.Navigator>
      <DraverStack.Screen
        name="Contact"
        component={Contact}
        options={() => ({
          headerShown: true,
        })}
      />
    </DraverStack.Navigator>
  );
}

function AboutStackScreen() {
  return (
    <DraverStack.Navigator>
      <DraverStack.Screen
        name="About"
        component={About}
        options={() => ({
          headerShown: true,
        })}
      />
    </DraverStack.Navigator>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={SearchStackScreen} />
      <Drawer.Screen name="Contact" component={ContactStackScreen} />
      <Drawer.Screen name="About" component={AboutStackScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
