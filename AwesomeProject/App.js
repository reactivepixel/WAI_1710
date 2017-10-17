import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import GameList from './src/components/GameList';
import TopGameList from './src/components/TopGameList';
import MainScreen from './src/components/MainScreen';

const AppNav = StackNavigator({
  Home: { screen: MainScreen,
          navigationOptions: { title: 'TableTop Citadel' }
  },
  Collection: { screen: GameList,
                navigationOptions: { title: 'My Collection' }
  },
  Ranked: { screen: TopGameList,
            navigationOptions: { title: 'Top Ranked' }
  },
});

export default AppNav;

// Only 'root' gets AppRegistry everything else gets export
AppRegistry.registerComponent('AwesomeProject', () => AppNav);
