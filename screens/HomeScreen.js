import { createStackNavigator} from 'react-navigation';
import React, {Component} from 'react';


import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    AppRegistry,
    Text,
    TouchableOpacity,
    View,
    Button,
} from 'react-native';
import {
    WebBrowser
} from 'expo';

import {
    MonoText
} from '../components/StyledText';

_basics = () => {
    WebBrowser.openBrowserAsync(
      'https://www.google.com'
    );
  };

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>


          <View style={styles.getStartedContainer}>

            <Text style={styles.titleText}>{"\n"}{"\n"}Welcome to GamerWatch Center{"\n"}</Text>
        
            <View style={styles.welcomeContainer}>
            <Image
              source={
                  require('../assets/images/mystery.png')
              }
              style={styles.welcomeImage}
            />
          </View>


            <Text style={styles.getStartedText}>The purpose of the GamerWatch center is to ensure that YOU know what your kids are playing and for how long.
            {"\n"}
                </Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>Do not use this application for malicous purposes {"\n"}</MonoText>
            </View>

        <Button
          title="Go to your Admin Account Details"
          onPress={() => this.props.navigation.navigate('DetailedAccount')}
        />

            <Text style={styles.getStartedText}>
              {"\n"} Learn more below...
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._basics} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>The basics of gaming addiction</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Tap on the tabs below to get started!</Text>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
    
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
      container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
      titleText: {
    fontSize: 24,
    color: 'rgb(16, 50, 126)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});