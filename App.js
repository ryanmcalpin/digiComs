import React from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card } from "react-native-elements";

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

const data = [
  {
    imageUrl: "http://via.placeholder.com/178x115",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/178x115",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/178x115",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/178x115",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/178x115",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/178x115",
    title: "something six"
  }
];

var userComics = testComics;
var suggestedComics = testComics;

var userComicsList = userComics.map(data => (
  <Text key={data.id}>{data.title}</Text>
));
var SuggestedComicsList = suggestedComics.map(data => (
  <Text key={data.id}>{data.title} suggested</Text>
));

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={styles.screenContainer}>
      <Text>My Comics</Text>
        <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card
            title={null}
            image={{ uri: rowData.imageUrl }}
            imageStyle={styles.cardImage}
            containerStyle={styles.cardContainer}
            >
            <Text style={{ marginBottom: 10 }}>
            {rowData.title}
            </Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        />
      </View>

    );
  }
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
      <View style={styles.screenContainer}>
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
      <View style={styles.screenContainer}>
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
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  cardContainer: {
    padding: 0,
    height: 218,
    width: 115,
  },
  cardImage: {
    height: 178
  }
});
