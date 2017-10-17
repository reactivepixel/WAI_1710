import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';



const MenuOption = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <Card>
      <View style={viewStyle}>
        <Text style={textStyle}>{props.menuText}</Text>
      </View>
    </Card>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 45,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    marginBottom: 25

  }
};

export default MenuOption;
