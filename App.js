import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

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

class HomeScreen extends React.Component {
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
          onPress={() => this.props.navigation.navigate('Studio')}
          title="New Story"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Library')}
          title="Library"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Explore')}
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

class StudioScreen extends React.Component {
  static navigationOptions = {
    title: 'Studio'
  }

  constructor(props) {
    super(props);
    this.state = {
      testProp: "studio prop"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.testProp}</Text>
      </View>
    )
  }
}

class LibraryScreen extends React.Component {
  static navigationOptions = {
    title: 'Library'
  }

  constructor(props) {
    super(props);
    this.state = {
      testProp: "library prop"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.testProp}</Text>
      </View>
    )
  }
}

class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore'
  }

  constructor(props) {
    super(props);
    this.state = {
      testProp: "explore prop"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.testProp}</Text>
      </View>
    )
  }
}

const RootStack = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Studio: { screen: StudioScreen },
  Library: { screen: LibraryScreen },
  Explore: { screen: ExploreScreen },
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
