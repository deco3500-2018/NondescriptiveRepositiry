import React from 'react';
import { Button, Text, View, StyleSheet, Switch, Linking} from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";
import { Image, Platform, ScrollView, AppRegistry, TouchableOpacity,  } from 'react-native';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

state = {
    refreshValue: true, 
    notificationValue: true,
    switchValue: true
};

_handleToggleSwitch = () => this.setState(state => ({
    switchValue: !state.switchValue
}))


_handleRefreshToggleSwitch = () => this.setState(state => ({
    refreshValue: !state.refreshValue
}))

_handleMaryToggleSwitch = () => this.setState(state => ({
    maryValue: !state.maryValue
}))

_handleTimToggleSwitch = () => this.setState(state => ({
    timValue: !state.timValue
}))

  render() {
    return ( 
        
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          
        
         <View style={styles.container}>
       <Text>Background app refresh</Text>
       <Switch
        onValueChange={this._handleRefreshToggleSwitch}
        value={this.state.refreshValue}
        />
        
        <Text>Notifications</Text>
       <Switch
        onValueChange={this._handleToggleSwitch}
        value={this.state.switchValue}
        />
        
        <Text>Bank accounts linked</Text>
        <Text>034-182</Text>
         <Button title="Change Linked Accounts" onPress={ ()=>{ Linking.openURL('https://banking.westpac.com.au/wbc/banking/handler?TAM_OP=login&segment=personal&logout=false')}} /> 


        <Text>Children Monitoring</Text>
         <Text>Mary</Text>
        
       <Switch
        onValueChange={this._handleMaryToggleSwitch}
        value={this.state.maryValue}
        />
        
         <Text>Tim</Text>
       <Switch
        onValueChange={this._handleTimToggleSwitch}
        value={this.state.timValue}
        />


<Text>Monitor Additional Services</Text>
         <Button title="Add Steam API" onPress={ ()=>{ Linking.openURL('https://store.steampowered.com/stats/')}} /> 
 <Button title="Add Xbox API" onPress={ ()=>{ Linking.openURL('https://developer.microsoft.com/en-us/games/xbox/xboxlive')}} /> 
 <Button title="Add PS4 API" onPress={ ()=>{ Linking.openURL('https://blog.us.playstation.com/2018/03/12/play-time-management-and-other-ps4-tips-for-gaming-families/')}} />
                   </View>



        </ScrollView> 
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCE0FD",
  },
  textContainer: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    backgroundColor: 'white',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#2699FB',
    marginHorizontal: 5,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    borderWidth: 5,
    borderColor: '#2699FB',
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: 250,
  },
});