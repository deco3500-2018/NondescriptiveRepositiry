import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryArea, VictoryPie, createContainer} from "victory-native";
import Svg from 'react-native-svg';

const sampleData=[
    { x: "Mobile", y: 2 },
    { x: "PS3", y: 1 },
    { x: "PS4", y: 5 },
    { x: "CPU", y: 4}
  ];


const VoronoiContaier = createContainer('voronoi');

export default class MSystemScreen extends React.Component {
  static navigationOptions = {
    title: 'Approve Game Systems',
  };

  render() {
    return (
       <View style={styles.container}>
        <Text style={styles.heading}>Approve or disable indivdual systems based on play time</Text>
<Svg width={400} height={400} viewBox="0 0 400 400" style={{ width: "100%", height: "auto" }}>
  <VictoryPie
         colorScale={["#4d88ff", "#3377ff", "#1a66ff", "#0055ff"]}
    standalone={false}
    innerRadius={75}
    labelRadius={125}
    style={{ labels: { fontSize: 20 }}}
  data={sampleData}
    events={[
      {
        target: "data",
        eventHandlers: {
                           onPressIn: () => {
                  return [
                    {
                      mutation: (props) => {
                        return  {
                          style: Object.assign({}, props.style, {fill: '#fff'})
                        }
                      }
                    }, {
                        target: "labels",
                        mutation: (props) => {
                            return props.text === "Disabled" ?
                            null : { text: "Disabled" }
                        }
                    }];
                }
        }
      }
    ]}
  />
</Svg>
</View>
        
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BCE0FD",
  },
  heading: {
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
});

