import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";
import { createStackNavigator} from 'react-navigation';

const sampleData = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class DetailedAccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Detailed Account Information',
  };

  render() {
    return (  <View style={styles.container}>
                    <Button
          title="Go to your pie"
          onPress={() => this.props.navigation.navigate('Pie')}
        />


        <Button
          title="Go to your bar"
          onPress={() => this.props.navigation.navigate('Bar')}
        />

<Button
          title="Go to your stacked"
          onPress={() => this.props.navigation.navigate('Stack')}
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
    backgroundColor: "#f5fcff",
      margin: 20
  }
});