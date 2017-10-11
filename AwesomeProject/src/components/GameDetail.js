import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Passing this component to Card with {props.children}
const GameDetail = ({ game }) => {
  const { name, averageRating, minPlayers, maxPlayers, playingTime, image } = game;
  const {
    // thumbnailStyle,
    headerContentStyle,
    imageStyle,
    textStyle,
    bumperStyle
  } = styles;
  const url = 'http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=' + name + '+board+game&tag=tabletopcitad-20';
  return (
    <Card>

    <CardSection>
      <Text style={textStyle}>{name}</Text>
    </CardSection>

    <CardSection style={bumperStyle}>
        <View style={headerContentStyle}>
          <Text>Rating: {averageRating.toFixed(2)}</Text>
          <Text>Players: {minPlayers}-{maxPlayers}</Text>
          <Text>Time: {playingTime}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL()}>
          More Details
        </Button>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bumperStyle: {
    marginLeft: 5,
    marginRight: 5
  },
  thumbnailStyle: {
    height: 100,
    width: 100,
    margin: 3
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
    // resizeMode: 'contain'
  }
};

export default GameDetail;

// <View>
//   <Image
//     style={thumbnailStyle}
//     source={{ uri: image }}
//   />
// </View>
