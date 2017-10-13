import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import GameDetail from './GameDetail';


class GameList extends Component {
  // Class level property...
  state = { games: [] };
// http://boardgamegeek.com/xmlapi/collection/allnations21?own=1
// https://bgg-json.azurewebsites.net/collection/allnations21?own=0
  componentWillMount() {
    // Component state lives in here...
    axios.get('https://bgg-json.azurewebsites.net/collection/mindtour?owned=1')
      .then(response => this.setState({ games: response.data }));
  }

  // loop through all the data
  renderGames() {
    return this.state.games.map(game =>
      // Pass down game as prop to GameDetail
      //(name of variable does not need to be same as prop name could be data={game})
      <GameDetail key={game.gameId} game={game} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderGames()}
      </ScrollView>
    );
  }
}

export default GameList;
