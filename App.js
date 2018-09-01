import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

var testComics = [
  {
    id: 1,
    title: "test story 1"
  },
  {
    id: 2,
    title: "test story 2"
  }
]

var userComics = testComics;
var suggestedComics = testComics;

var userComicsList = userComics.map(data => (
  <Text key={data.id}>{data.title}</Text>
));
var SuggestedComicsList = suggestedComics.map(data => (
  <Text key={data.id}>{data.title} suggested</Text>
));

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>My Comics</Text>
        {userComicsList}
        <Text>Suggested Comics</Text>
        {SuggestedComicsList}
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
        {userComicsList}
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
        {SuggestedComicsList}
      </View>
    )
  }
}

const RootStack = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Studio: { screen: StudioScreen },
    Explore: { screen: ExploreScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Studio') {
          iconName = `ios-create${focused ? '' : '-outline'}`;
        } else if (routeName === 'Explore') {
          iconName = `ios-globe${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

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
