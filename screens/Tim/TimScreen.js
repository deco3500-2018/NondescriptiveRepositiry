import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";

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
        
          <View style={styles.headingContainer}>
          <Text style={styles.headings}>Most played system</Text>
        
          <Text style={styles.headings}>Money spent</Text>
        
          <Text style={styles.headings}>Most played game</Text>
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.headingPlayed}>Xbox</Text>
            <Text style={styles.headingSpent}>$20.00</Text>
            <Text style={styles.headingGame}>Fortnite</Text>
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



                    <Button
          title="View total time played ->"
          onPress={() => this.props.navigation.navigate('Time')} 
        />

                    <Button
          title="View Most Played games ->"
          onPress={() => this.props.navigation.navigate('Game')}
        />


        <Button
          title="View breakdown by system ->"
          onPress={() => this.props.navigation.navigate('System')}
        />
</View>
      
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d6e0ff",
  },
  headingContainer: {
    flexDirection: 'row',
  },
  headings: {
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  headingPlayed: {
    marginLeft: 1,
    marginRight: 9.75,
    paddingHorizontal: 47.75,
    backgroundColor: 'white',
  },
  headingSpent: {
    marginLeft: 0.5,
    marginRight: 9,
    paddingHorizontal: 19,
    backgroundColor: 'white',
  },
  headingGame: {
    marginLeft: 0.5,
    paddingHorizontal: 34,
    backgroundColor: 'white',
  }
});