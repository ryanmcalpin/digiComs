import React from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
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

  _onPressButton(item) {
    this.props.navigation.navigate('Edit', {
      item: item
    });
  }

  createNewComic() {
    console.log('yaaaaaaa');
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <TouchableHighlight onPress={() => this.createNewComic()}>
          <Card
          title={null}
          containerStyle={styles.projectListItem}
          >
            <Text style={{ marginBottom: 10 }}>
            Create a new Comic
            </Text>
          </Card>
        </TouchableHighlight>
        <FlatList
          data={this.state.userProjects}
          renderItem={({item: rowData}) => (
            <TouchableHighlight onPress={() => this._onPressButton(rowData)}>
              <Card
              title={null}
              containerStyle={styles.projectListItem}
              >
                <Text style={{ marginBottom: 10 }}>
                {rowData.title}
                </Text>
              </Card>
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

class EditScreen extends React.Component {
  static navigationOptions = {
    title: 'Edit'
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'Oops, no item!');

    return (
      <View style={styles.screenContainer}>
        <Text>Edit {item.title}</Text>
        <Text>{item.imageUrl}</Text>
        <Text>id# {item.id}</Text>

      </View>
    )
  }
}

const StudioStackNav = createStackNavigator(
  {
    Studio: { screen: StudioScreen },
    Edit: { screen: EditScreen }
  },
  {
    headerMode: 'none',
  }
);

const RootStack = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Studio: { screen: StudioStackNav },
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
  },
  projectListItem: {
    // flex: 1,
    height: 100
  }
});
