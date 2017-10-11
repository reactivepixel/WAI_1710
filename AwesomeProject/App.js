import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import GameList from './src/components/GameList';
import TopGameList from './src/components/TopGameList';



export default class App extends React.Component {
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
    justifyContent: 'center'
  }
};
