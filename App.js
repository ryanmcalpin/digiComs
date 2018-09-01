import React from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
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

const userComics = [
  {
    id: 1,
    imageUrl: "http://via.placeholder.com/178x115",
    title: "something"
  },
  {
    id: 2,
    imageUrl: "http://via.placeholder.com/178x115",
    title: "something two"
  },
  {
    id: 3,
    imageUrl: "http://via.placeholder.com/178x115",
    title: "something three"
  },
  {
    id: 4,
    imageUrl: "http://via.placeholder.com/178x115",
    title: "something four"
  },
  {
    id: 5,
    imageUrl: "http://via.placeholder.com/178x115",
    title: "something five"
  },
  {
    id: 6,
    imageUrl: "http://via.placeholder.com/178x115",
    title: "something six"
  }
];

const suggestedComics = userComics;
const userProjects = userComics;

// var userProjectsList = userComics.map(data => (
//   <Text key={data.id}>{data.title}</Text>
// ));
// var SuggestedComicsList = suggestedComics.map(data => (
//   <Text key={data.id}>{data.title} suggested</Text>
// ));

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userComics: userComics
    };
  }

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    if (this.state.userComics.length > 0) {
      return (
        <View style={styles.screenContainer}>
          <Text>My Comics</Text>
          <FlatList
          horizontal
          data={this.state.userComics}
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
    } else {
      return (
        <View style={styles.screenContainer}>
          <Text>Go to the studio tab to make your first comic!</Text>
        </View>
      )
    }
  }
}


class StudioScreen extends React.Component {
  static navigationOptions = {
    title: 'Studio'
  }

  constructor(props) {
    super(props);
    this.state = {
      userProjects: userProjects
    };
  }

  _onPressButton() {
    console.log('okaay');
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <FlatList
          data={this.state.userProjects}
          renderItem={({item}) => (
            <TouchableHighlight onPress={this._onPressButton}>
              <Text style={null}>{item.title}</Text>
            </TouchableHighlight>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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
      suggestedComics: suggestedComics
    };
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <Text>Suggested Comics</Text>
        <FlatList
        horizontal
        data={this.state.suggestedComics}
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
