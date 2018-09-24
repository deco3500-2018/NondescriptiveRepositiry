import React from 'react';
import { Button, Text, View } from 'react-native';

export default class DetailedAccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Detailed Account Information',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details of the "user"!</Text>
      </View>
    );
  }
}
