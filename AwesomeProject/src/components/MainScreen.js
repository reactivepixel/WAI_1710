import React from 'react';
import { View } from 'react-native';
import MenuOption from './MenuOption';


const MainScreen = () => {
  return (
    <View>
      <MenuOption menuText={'What to play?'} />
      <MenuOption menuText={'My Collections'} />
      <MenuOption menuText={'Top Ranked Games'} />
      <MenuOption menuText={'What Gamer Am I?'} />
    </View>
  );
};

export default MainScreen;
