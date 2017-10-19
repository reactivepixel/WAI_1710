import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import RandomPlayDetail from './RandomPlayDetail';


export default class RandomPlayList extends Component {
  // Bring in constructor if props need to be passed (look into)
  // Class level property...
  state = { games: [] };
  componentWillMount() {
    axios.get('https://bgg-json.azurewebsites.net/collection/allnations21')
      .then((response) => {
        const gameOwned = [];
        const randomOrder = [];

        response.data.forEach((foo) => {
          // Only games that are both owned and not expansions are set
          if (foo.owned === true && foo.isExpansion === false) {
            gameOwned.push(foo);
          }
        });
        // console.log(gameOwned);
          this.setState({ games: gameOwned });
          for (let i = 0; i < 5; i++) {
            const rndmGame = gameOwned[Math.floor(Math.random() * gameOwned.length)];
            if (randomOrder.includes(rndmGame)) {
              i--;
            } else if (!randomOrder.includes(rndmGame)) {
              randomOrder.push(rndmGame);
            }
          }
          this.setState({ games: [...randomOrder] });
          console.log(...randomOrder);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // loop through all the data
  renderGames() {
    return this.state.games.map(game =>
      // Pass down game as prop to GameDetail
      //(name of variable does not need to be same as prop name could be data={game})
      // <GameDetail key={game.gameId} game={game} />
      <RandomPlayDetail key={game.gameId} game={game} />
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

// redux store connect will require export here
// export default RandomPlayList;
