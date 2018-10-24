import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

import TimScreen from '../screens/Tim/TimScreen';
import TTimeScreen from '../screens/Tim/TTimeScreen';
import TMoneyScreen from '../screens/Tim/TMoneyScreen';
import TSystemScreen from '../screens/Tim/TSystemScreen';

import MaryScreen from '../screens/Mary/MaryScreen';
import MTimeScreen from '../screens/Mary/MTimeScreen';
import MMoneyScreen from '../screens/Mary/MMoneyScreen';
import MSystemScreen from '../screens/Mary/MSystemScreen';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Tim: { screen: TimScreen },
  Mary: { screen: MaryScreen },
});

const TimStack = createStackNavigator({
  Home: { screen: TimScreen },
  Time: { screen: TTimeScreen },
  System: { screen: TSystemScreen },
  Money: { screen: TMoneyScreen },
});

TimStack.navigationOptions = {
  tabBarLabel: 'Tim',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),

tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',

        style: {
            backgroundColor: '#2699FB',
        },
    },
};

const MaryStack = createStackNavigator({
  Home: { screen: MaryScreen },
  MTime: { screen: MTimeScreen },
  MSystem: { screen: MSystemScreen },
  MMoney: { screen: MMoneyScreen },
});


MaryStack.navigationOptions = {
  tabBarLabel: 'Mary',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),

tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',

        style: {
            backgroundColor: '#2699FB',
        },
    },
};

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),

tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',

        style: {
            backgroundColor: '#2699FB',
        },
    },
};



const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',

        style: {
            backgroundColor: '#2699FB',
        },
    },
};

export default createBottomTabNavigator({
  HomeStack,
  TimStack,
  MaryStack,
  SettingsStack,

});
