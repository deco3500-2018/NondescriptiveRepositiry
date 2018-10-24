import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";
import { Image, Platform, ScrollView, AppRegistry, TouchableOpacity,  } from 'react-native';

const sampleData=[
    { x: "Day 1", y: 2 },
    { x: "Day 2", y: 3 },
    { x: "Day 3", y: 5 },
    { x: "Day 4", y: 4},
    { x: "Day 5", y: 6},
    { x: "Remaining", y: 10}
  ];

export default class MaryScreen extends React.Component {
  static navigationOptions = {
    title: "Mary's summary",
      
    headerStyle: { backgroundColor: "#2699FB" },
    headerTitleStyle: { color: 'white' },
  };

  render() {
    return ( 
        
              <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          
        
         <View style={styles.container}>
       
        
          <View>
          <Text style={styles.textContainer}>Most played system:                                PC</Text>
        <View style={styles.buttonContainer}>
                    <Button
          title="View Most Played system"
          onPress={() => this.props.navigation.navigate('MSystem')}
        />
        </View>
        
          <Text style={styles.textContainer}>Money spent:                                     $75.00</Text>
<View style={styles.buttonContainer}>
        <Button
          title="View breakdown by spending"
          onPress={() => this.props.navigation.navigate('MMoney')}
        />
        </View>
        
          <Text style={styles.textContainer}>Most played game:                             PUBG</Text>
         <View style={styles.buttonContainer}>
                    <Button
          title="View total time played"
          onPress={() => this.props.navigation.navigate('MTime')} 
        />
        </View>
          </View>
        

 <Text style={styles.textContainer}>Each days play is recorded and displayed below with the amount of time allowed remaning</Text>
  <VictoryPie
             colorScale={["#ea4dff", "#8118db", "#1b9bde", "#6387ce", "#42f5c5", "#e7f542" ]}
    events={[{
      target: "data",
      eventHandlers: {
        onPressIn: () => {
          return [
            {
              target: "data",
              mutation: (props) => {
                const fill = props.style && props.style.fill;
                return fill === "#fff" ? null : { style: { fill: "#fff" } };
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
    data={sampleData}
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
    backgroundColor: "#FFF",
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
    alignItems: "center",
  },
  buttonContainer: {
    borderWidth: 3,
    borderColor: '#2699FB',
    backgroundColor: '#fff',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 4,
    paddingVertical: 10,
    borderRadius: 20,
    width: 275,
  },
});