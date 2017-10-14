import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import GameList from './src/components/GameList';
import TopGameList from './src/components/TopGameList';
import MainScreen from './src/components/MainScreen';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'TableTop Citadel'} />

        <TopGameList />

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgba(253, 246, 227, 0.2)',
    // justifyContent: 'center'
  }
};

// Only 'root' gets AppRegistry everything else gets export
AppRegistry.registerComponent('AwesomeProject', () => App);
