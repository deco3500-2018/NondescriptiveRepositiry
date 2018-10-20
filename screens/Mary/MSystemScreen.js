import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryArea, VictoryPie, createContainer} from "victory-native";
import Svg from 'react-native-svg';

const sampleData=[
    { x: "Day 1", y: 2 },
    { x: "Day 2", y: 3 },
    { x: "Day 3", y: 5 },
    { x: "Day 4", y: 4},
    { x: "Day 5", y: 6}
  ];


const VoronoiContaier = createContainer('voronoi');

export default class MSystemScreen extends React.Component {
  static navigationOptions = {
    title: 'Detailed Account Information',
  };

  render() {
    return (
      
<Svg width={400} height={400} viewBox="0 0 400 400" style={{ width: "100%", height: "auto" }}>
  <VictoryPie
    standalone={false}
    innerRadius={75}
    labelRadius={125}
    style={{ labels: { fontSize: 20 }}}
  data={sampleData}
    animate={{duration: 1500}}
    events={[
      {
        target: "data",
        eventHandlers: {
           onPressIn: alert
        }
      }
    ]}
  />
</Svg>
        
        
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

