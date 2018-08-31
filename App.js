import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

var userStories = [
  {
    id: 1,
    title: "test story 1"
  },
  {
    id: 2,
    title: "test story 2"
  }
]

var userStoriesList = userStories.map(data => (
  <Text key={data.id}>{data.title}</Text>
));

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'DigiComs'
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Home"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Test')}
          title="New Story"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Test')}
          title="Library"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Test')}
          title="Explore"
        />
        {userStoriesList}
      </View>
    );
  }

  doIt() {
    alert("okaaay");
  }

  createNewStory() {
    // let newStory
  }

  // Alert.alert(
  //   'Alert Title',
  //   'My Alert Msg',
  //   [
  //     // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
  //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
  //     {text: 'OK', onPress: () => console.log('OK Pressed')},
  //   ],
  //   { cancelable: false }
  // )
}

class TestScreen extends React.Component {
  static navigationOptions = {
    title: 'Test Screen'
  }
  render() {
    return (
      <View>
        <Text>Yass</Text>
      </View>
    )
  }
}

const RootStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Test: { screen: TestScreen },
});

export default class App extends React.Component {
    render() {
      return <RootStack/>;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
