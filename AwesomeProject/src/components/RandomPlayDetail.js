import React from 'react';
import { Text, View, Image, Linking, WebView } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Passing this component to Card with {props.children}
const RandomPlayDetail = ({ game }) => {
  const { name, averageRating, minPlayers, maxPlayers, playingTime, image, gameId } = game;
  const {
    headerContentStyle,
    imageStyle,
    textStyle,
    contentStyle,
    bumperStyle,
  } = styles;
  const urlDetail = 'https://boardgamegeek.com/boardgame/' + gameId;

  return (
    <View style={styles.container}>

    <Card>

    <CardSection>
      <Text style={textStyle}>{name}</Text>
    </CardSection>

    <CardSection style={bumperStyle}>
        <View style={headerContentStyle}>
          <Text style={contentStyle}>Rating: {averageRating.toFixed(2)}</Text>
          <Text style={contentStyle}>Players: {minPlayers}-{maxPlayers}</Text>
          <Text style={contentStyle}>Time: {playingTime}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(urlDetail)}>
          More Details
        </Button>
      </CardSection>

    </Card>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(249, 249, 249, .6)',
  },
  headerContentStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  contentStyle: {
    fontSize: 13,
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

export default RandomPlayDetail;
