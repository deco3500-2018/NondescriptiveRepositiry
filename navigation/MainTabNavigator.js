import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TrackerScreen from '../screens/TrackerScreen';
import RewardScreen from '../screens/RewardScreen';
import SettingsScreen from '../screens/SettingsScreen';

import DetailedAccountScreen from '../screens/DetailedAccountScreen';


const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  DetailedAccount: { screen: DetailedAccountScreen },
});

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
};

const TrackerStack = createStackNavigator({
  Tracker: TrackerScreen,
});

TrackerStack.navigationOptions = {
  tabBarLabel: 'Tracker',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const RewardStack = createStackNavigator({
  Reward: RewardScreen,
});

RewardStack.navigationOptions = {
  tabBarLabel: 'Reward Center',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
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
};

export default createBottomTabNavigator({
  HomeStack,
  TrackerStack,
  RewardStack,
  SettingsStack,
});
