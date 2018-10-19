import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ApprovedDaysScreen from '../screens/ApprovedDaysScreen';
import RewardScreen from '../screens/RewardScreen';
import SettingsScreen from '../screens/SettingsScreen';

import TimScreen from '../screens/Tim/TimScreen';
import TTimeScreen from '../screens/Tim/TTimeScreen';
import TGameScreen from '../screens/Tim/TGameScreen';
import TSystemScreen from '../screens/Tim/TSystemScreen';

import MaryScreen from '../screens/Mary/MaryScreen';
import MTimeScreen from '../screens/Mary/MTimeScreen';
import MGameScreen from '../screens/Mary/MGameScreen';
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
  Game: { screen: TGameScreen },
});

TimStack.navigationOptions = {
  tabBarLabel: 'Tim',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const MaryStack = createStackNavigator({
  Home: { screen: MaryScreen },
  MTime: { screen: MTimeScreen },
  MSystem: { screen: MSystemScreen },
  MGame: { screen: MGameScreen },
});


MaryStack.navigationOptions = {
  tabBarLabel: 'Mary',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
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
};

const ApprovedDaysStack = createStackNavigator({
  ApprovedDaysTracker: ApprovedDaysScreen,
});

ApprovedDaysStack.navigationOptions = {
  tabBarLabel: 'PlayDays',
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
  ApprovedDaysStack,
  RewardStack,
  TimStack,
  MaryStack,
  SettingsStack,
});
