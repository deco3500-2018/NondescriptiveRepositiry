import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryArea, VictoryPie, createContainer, VictoryStack, VictoryLabel, VictoryAxis} from "victory-native";
import Svg from 'react-native-svg';
      
const randomData=[
  ];

const moneySpent=5;


const VoronoiContaier = createContainer('voronoi');

export default class TMoneyScreen extends React.Component {
  static navigationOptions = {
    title: 'Tim Spending',
  };



constructor(props) {
    super(props);
    this.state = {
      data1: this.getData1()
    };
 }


  getData1() {      
    rand1=(Math.floor(Math.random() * 3)+1);
    rand2=(Math.floor(Math.random() * 10)+1);
    rand3=(Math.floor(Math.random() * 6)+1);
    rand4=(Math.floor(Math.random() * 5)+1);
    moneySpent=rand1+rand2+rand3+rand4;
    randomData=[
        
    {x: "Overwatch", y: rand1 }, 
    {x: "Pokemon", y: rand2 }, 
    {x: "Uno", y: rand3 }, 
    {x: "Roblox", y: rand4 },     
  ]
      
    return randomData
  }


  render() {
    return (
         
        
        <View style={styles.container}>

		<View style={styles.getStartedContainer}>
            <Text style={styles.topText}>You have spent money on 4 games</Text>
        </View>

  <VictoryChart
    theme={VictoryTheme.material}
       animate={{
  duration: 1500,
  onLoad: { duration: 1000 }
}}
  >
    <VictoryBar
barRatio={0.5}
alignment="middle"

    data={this.state.data1}

  labels={(d) => `$: ${d.y}`}


  style={{ labels: { fill: "black", fontSize: 12 }, data: { fill: "#2699FB" } }}
  labelComponent={<VictoryLabel dy={-30}/>}
      
    />

<VictoryAxis 
style={{ axis: {stroke: "none"}
}} />
  </VictoryChart>
 
        
         
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
  getStartedContainer: {
  	marginBottom: 20,
  	backgroundColor: '#BCE0FD',
  	
  },
  topText: {
  	fontSize: 22,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#2699FB',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 30,
  }
});

