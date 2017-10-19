import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import MenuOption from './MenuOption';


const MainScreen = (props) => {

  return (
    <Image source={require('./img/LettersFromWhitechapel.jpg')} style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Random')}>
        <MenuOption menuText={'What to play?'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Collection')}>
        <MenuOption menuText={'My Collections'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Ranked')}>
        <MenuOption menuText={'Top Ranked Games'} />
      </TouchableOpacity>
    </Image>

  );
};

const styles = {
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(248, 248, 248, .7)',
  }
};

export default MainScreen;

// menu screen "bilboard" slider

// <MenuOption menuText={'What Gamer Am I?'} />
