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
      <Text style={styles.titleText}>{"\n"}{"\n"}Gamerwatch{"\n"}</Text>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          
          
            <View style={styles.welcomeContainer}>
            <Image
              source={
                  require('../assets/images/mystery.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          

<View style={styles.container}>

        <View style={styles.buttonContainer}>
          <Button title="Mary"
            onPress={() => this.props.navigation.navigate('Mary')}
        />
        </View>

        <View style={styles.buttonContainer}>
        <Button
          title="Timmy"
          onPress={() => this.props.navigation.navigate('Tim')}
        />
        </View>

</View>





        </ScrollView> 
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
    width: 1000,
    height: 500,
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
    backgroundColor: '#BCE0FD',
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
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
      titleText: {
    fontSize: 40,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
    backgroundColor: '#2699FB',
    paddingHorizontal: 75,
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
  buttonContainer: {
    borderWidth: 5,
    borderColor: '#2699FB',
    backgroundColor: '#fff',
    marginHorizontal: 30,
    marginBottom: 20,
    paddingVertical: 20,
    borderRadius: 20,
  },
});