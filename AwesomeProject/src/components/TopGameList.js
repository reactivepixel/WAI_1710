import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import TopGameDetail from './TopGameDetail';


class TopGameList extends Component {
  // Class level property
  state = { tGames: [] };

  componentWillMount() {
    //Component state lives here
    axios.get('https://bgg-json.azurewebsites.net/hot')
      .then(response => this.setState({ tGames: response.data }))
  }

  // Loop through data
  renderGames() {
    return this.state.tGames.map(game =>
      // Pass down tGame as prop to GameDetail
      //(name of variable does not need to be same as prop name could be data={tGames})
      <TopGameDetail key={game.gameId} game={game} />
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

export default TopGameList;
