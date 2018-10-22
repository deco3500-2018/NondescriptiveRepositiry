import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";
import { Image, Platform, ScrollView, AppRegistry, TouchableOpacity,  } from 'react-native';

const sampleData = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class TimScreen extends React.Component {
  static navigationOptions = {
    title: 'Summary of Tim gaming',
  };

  render() {
    return ( 
        
        
        <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
          <View>
          <Text style={styles.textContainer}>Most played system:                                PC</Text>
        
          <Text style={styles.textContainer}>Money spent:                                     $75.00</Text>
        
          <Text style={styles.textContainer}>Most played game:                             PUBG</Text>
          </View>
        
  <VictoryPie
              colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
    events={[{
      target: "data",
      eventHandlers: {
        onPressIn: () => {
          return [
            {
              target: "data",
              mutation: (props) => {
                const fill = props.style && props.style.fill;
                return fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
              }
            }, {
              target: "labels",
              mutation: (props) => {
                return props.text === "clicked" ? null : { text: "clicked" };
              }
            }
          ];
        }
      }
    }]}
    data={[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
         ]}
  />


                    <View style={styles.buttonContainer}>
                    <Button
          title="View total time played"
          onPress={() => this.props.navigation.navigate('Time')} 
        />
        </View>
                  <View style={styles.buttonContainer}>
                    <Button
          title="View Most Played games"
          onPress={() => this.props.navigation.navigate('Game')}
        />
        </View>

        <View style={styles.buttonContainer}>
        <Button
          title="View breakdown by system"
          onPress={() => this.props.navigation.navigate('System')}
        />
        </View>
    </ScrollView>
</View>
      
      
      
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