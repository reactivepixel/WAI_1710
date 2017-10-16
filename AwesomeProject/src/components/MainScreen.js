import React from 'react';
import { View } from 'react-native';
import MenuOption from './MenuOption';


const MainScreen = () => {
  return (
    <View>
      <MenuOption menuText={'What to play?'} />
      <MenuOption menuText={'My Collections'} />
      <MenuOption menuText={'Top Ranked Games'} />
    </View>
  );
};

export default MainScreen;

// menu screen "bilboard" slider

// <MenuOption menuText={'What Gamer Am I?'} />
