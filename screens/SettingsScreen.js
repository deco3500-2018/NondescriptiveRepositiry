import React from 'react';
import { Button, Text, View, StyleSheet, Switch, Linking} from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";
import { Image, Platform, ScrollView, AppRegistry, TouchableOpacity,  } from 'react-native';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    headerStyle: { backgroundColor: "#000000" },
    headerTitleStyle: { color: 'white' },
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
         <View style={styles.textContainer}>
       <Text>Background app refresh</Text>
       <Switch
        onValueChange={this._handleRefreshToggleSwitch}
        value={this.state.refreshValue}
        />
        </View>
        <View style={styles.textContainer}>
        <Text>Notifications</Text>
       <Switch
        onValueChange={this._handleToggleSwitch}
        value={this.state.switchValue}
        />
        </View>
        <View style={styles.textContainer}>
        <Text>Bank accounts linked</Text>
        <Text>034-182</Text>
         <Button title="Change Linked Accounts" onPress={ ()=>{ Linking.openURL('https://banking.westpac.com.au/wbc/banking/handler?TAM_OP=login&segment=personal&logout=false')}} /> 
        </View>
        <View style={styles.textContainer}>
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
        </View>

<View style={styles.textContainer}>
<Text>Monitor Additional Services</Text>
        <View style={styles.buttonContainer}>
         <Button title="Add Steam API" onPress={ ()=>{ Linking.openURL('https://store.steampowered.com/stats/')}} /> 
         </View>
         <View style={styles.buttonContainer}>
 <Button title="Add Xbox API" onPress={ ()=>{ Linking.openURL('https://developer.microsoft.com/en-us/games/xbox/xboxlive')}} /> 
 </View>
 <View style={styles.buttonContainer}>
 <Button title="Add PS4 API" onPress={ ()=>{ Linking.openURL('https://blog.us.playstation.com/2018/03/12/play-time-management-and-other-ps4-tips-for-gaming-families/')}} />
 </View>
 </View>
                   </View>



        </ScrollView> 
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  textContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#2699FB',
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    borderWidth: 3,
    borderColor: '#2699FB',
    backgroundColor: '#fff',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: 250,
  },
});