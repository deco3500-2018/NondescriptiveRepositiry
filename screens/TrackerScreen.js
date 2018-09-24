import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class TrackerScreen extends React.Component {
  static navigationOptions = {
    title: 'Account Tracker',
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Account 1'},
            {key: 'Account 2'},
            {key: 'Account 3'},
            {key: 'Account 4'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
