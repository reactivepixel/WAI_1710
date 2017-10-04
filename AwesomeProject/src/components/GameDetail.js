import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


// Passing this component to Card with {props.children}
const GameDetail = ({ game }) => {
  const { name, averageRating, minPlayers, maxPlayers, playingTime, image } = game;
  const {
    // thumbnailStyle,
    headerContentStyle,
    imageStyle
  } = styles;

  return (
    <Card>
        <Text style={styles.textStyle}>{name}</Text>
      <CardSection>
        <View style={headerContentStyle}>
          <Text>Rating: {averageRating} | </Text>
          <Text>Players: {minPlayers}-{maxPlayers} | </Text>
          <Text>Time: {playingTime}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  thumbnailStyle: {
    height: 100,
    width: 100,
    margin: 3
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default GameDetail;

// <View>
//   <Image
//     style={thumbnailStyle}
//     source={{ uri: image }}
//   />
// </View>
