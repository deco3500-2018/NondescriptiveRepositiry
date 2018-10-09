import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MonthlyTrackerScreen from '../screens/MonthlyTrackerScreen';
import RewardScreen from '../screens/RewardScreen';
import SettingsScreen from '../screens/SettingsScreen';

import DetailedAccountScreen from '../screens/DetailedAccountScreen';
import PieScreen from '../screens/BarScreen';
import BarScreen from '../screens/PieScreen';
import StackScreen from '../screens/StackScreen';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  DetailedAccount: { screen: DetailedAccountScreen },
});

const DetailedStack = createStackNavigator({
  Home: { screen: DetailedAccountScreen },
  Pie: { screen: PieScreen },
  Bar: { screen: BarScreen },
  Stack: { screen: StackScreen },
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

const MonthlyTrackerStack = createStackNavigator({
  MonthlyTracker: MonthlyTrackerScreen,
});

MonthlyTrackerStack.navigationOptions = {
  tabBarLabel: 'Month Tracker',
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
  MonthlyTrackerStack,
  RewardStack,
  SettingsStack,
DetailedStack,
});
