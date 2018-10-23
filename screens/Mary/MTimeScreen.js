

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


export default class MTimeScreen extends React.Component {
    



  static navigationOptions = {
    title: 'Indiviudal Game time',
  };


  render() {
      
      
    return ( 
        
        <View style={styles.container}>
        
        <Text style={styles.BottomText}>{"\n"}{"\n"}Your gaming habits average 7 hours of gametime per game{"\n"}</Text>
        
            <VictoryChart
  theme={VictoryTheme.material}
  domainPadding={{ x: 9 }}
       animate={{
  duration: 1500,
  onLoad: { duration: 1000 }
}}
>
        
          
        
  <VictoryStack
  colorScale={"heatmap"}

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

            <Text style={styles.BottomText}>{"\n"}{"\n"}Mary played <Text style={styles.OverText}>Overwatch</Text>, Uno, Pokemon and Roblox this week{"\n"}</Text>
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
    backgroundColor: "#f5fcff"
  },       BottomText: {
    fontSize: 24,
    color: 'rgb(236, 3, 255)',
    lineHeight: 24,
    textAlign: 'center',
  },
    OverText: {
    fontSize: 24,
    color: 'rgb(0, 255, 235)',
    lineHeight: 24,
    textAlign: 'center',
  },
});