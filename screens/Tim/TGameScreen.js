import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryArea, VictoryPie, createContainer, VictoryStack} from "victory-native";
import Svg from 'react-native-svg';
      
const day1Data=[
        
    {x: "Monday", y: 1 }, 
    {x: "Tuesday", y: 2}, 
    {x: "Wednesday", y: 2}, 
    {x: "Thurday", y: 5}, 
    {x: "Friday", y: 6}
    
  ];


const VoronoiContaier = createContainer('voronoi');

export default class TTimeScreen extends React.Component {
  static navigationOptions = {
    title: 'Tim Game Screen',
  };



constructor(props) {
    super(props);
    this.state = {
      data1: this.getData1()
    };
 }


  getData1() {
    return randomData=[
        
    {x: "Monday", y: (Math.floor(Math.random() * 10)) }, 
    {x: "Tuesday", y: (Math.floor(Math.random() * 10))}, 
    {x: "Wednesday", y: (Math.floor(Math.random() * 10))}, 
    {x: "Thurday", y: (Math.floor(Math.random() * 10))}, 
    {x: "Friday", y: (Math.floor(Math.random() * 10))}
    
  ]
  }


  render() {
    return (
         
        
        <View style={styles.container}>
         <Button
          title="View refresh gaming"
        //doesnt refresh, will be used to filter by time period
          onPress={() => this.state.data1=this.getData1()}
        />

        <Text style={styles.BottomText}>{"\n"}{"\n"}Refresh data{"\n"}</Text>
        
            <VictoryChart
  theme={VictoryTheme.material}
  domainPadding={{ x: 9 }}
       animate={{
  duration: 1500,
  onLoad: { duration: 1000 }
}}
>
  <VictoryStack
  colorScale={["gold", "orange", "tomato",  "cyan"]}

>
        
  <VictoryBar
    data={this.state.data1}
  />
    
        
  <VictoryBar
    data={[{x: "Monday", y: 2 }, {x: "Tuesday", y: 8}, {x: "Wednesday", y: 9}, {x: "Thurday", y: 3}, {x: "Friday", y: 1}]}
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

            <Text style={styles.BottomText}>{"\n"}{"\n"}You <Text style={styles.OverText}>have</Text> exceeded your weekly limit!!{"\n"}</Text>
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
    backgroundColor: "#b9caff"
  }
});

