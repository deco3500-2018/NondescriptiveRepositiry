

import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryStack, VictoryArea, VictoryLegend } from "victory-native";

    
    const sampleData=[
    { x: "Day 1", y: 2 },  { x: "Day 1", y: 5 },
    { x: "Day 2", y: 3 },  { x: "Day 1", y: 2 },
    { x: "Day 3", y: 5 },
    { x: "Day 4", y: 4},
    { x: "Day 5", y: 6}
  ];


export default class TTimeScreen extends React.Component {
    



  static navigationOptions = {
    title: 'Indiviudal Game time',
  };


  render() {
      
      
    return ( 
        
        <View style={styles.container}>
        
        <Text style={styles.BottomText}>Your gaming habits average 7 hours of gametime per game</Text>
        
            <VictoryChart
  theme={VictoryTheme.material}
  domainPadding={{ x: 9 }}
       animate={{
  duration: 1500,
  onLoad: { duration: 1000 }
}}
>
        
          
        
  <VictoryStack
  colorScale={["#003366", "#0000cd", "#4169e1", "#8470ff"]}

>
        
  <VictoryBar
    data={[{x: "Monday", y: 1 }, {x: "Tuesday", y: 2}, {x: "Wednesday", y: 2}, {x: "Thurday", y: 5}, {x: "Friday", y: 6}]}
  />
    
        
  <VictoryBar
    data={[{x: "Monday", y: 3 }, {x: "Tuesday", y: 8}, {x: "Wednesday", y: 9}, {x: "Thurday", y: 3}, {x: "Friday", y: 1}]}
  />
        
        
  <VictoryBar
    data={[{x: "Monday", y: 4 }, {x: "Tuesday", y: 3}, {x: "Wednesday", y: 5}, {x: "Thurday", y: 5}, {x: "Friday", y: 5}]}
  />
        
        <VictoryBar
    data={[{x: "Wednesday", y: 5}]}
  />
            
</VictoryStack>
</VictoryChart>
 
        
         <View style={styles.getStartedContainer}>

            <Text style={styles.BottomText}>Tim played <Text style={styles.OverText}>Overwatch</Text>, Uno, Pokemon and Roblox this week</Text>
        </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BCE0FD"
  },       
  BottomText: {
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#2699FB',
    marginHorizontal: 5,
  },
  OverText: {
    fontSize: 24,
    color: '#2699FB',
    lineHeight: 24,
    textAlign: 'center',
  },
});