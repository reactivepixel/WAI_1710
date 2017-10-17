import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Passing this component to Card with {props.children}
const TopGameDetail = ({ game }) => {
  const { name, rank, thumbnail, yearPublished, gameId } = game;
  const {
    thumbnailStyle,
    headerContentStyle,
    imageStyle,
    textStyle,
    bumperStyle,
    contentStyle
  } = styles;
  const urlAffiliate = 'http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=' + name + '+board+game&tag=tabletopcitad-20';
  const urlDetail = 'https://boardgamegeek.com/boardgame/' + gameId;
  return (
    <Card>

    <CardSection>
      <Text style={textStyle}>{name}</Text>
    </CardSection>

      <CardSection>
        <Image
          style={thumbnailStyle}
          source={{ uri: thumbnail }}
        />
        <View style={headerContentStyle}>
          <Text style={contentStyle}>Rank: {rank}</Text>
          <Text style={contentStyle}>Published: {yearPublished}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(urlDetail)}>
          More Details
        </Button>
        <Button color='#30FC49' onPress={() => Linking.openURL(urlAffiliate)}>
          Buy Now
        </Button>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  contentStyle: {
    fontSize: 15,
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

export default TopGameDetail;

// <View>
//   <Image
//     style={thumbnailStyle}
//     source={{ uri: image }}
//   />
// </View>
