import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BuyButton = ({ onPress }) => {
   const {
     buttonStyle,
     textStyle
   } = styles;

   return (
     <TouchableOpacity onPress={onPress} style={buttonStyle}>
       <Text style={textStyle}>
         Buy Now
       </Text>
     </TouchableOpacity>
   );
 };

const styles = {
   textStyle: {
     alignSelf: 'center',
     color: '#26C83C',
     fontSize: 16,
     fontWeight: '600',
     paddingTop: 10,
     paddingBottom: 10
   },
   buttonStyle: {
     flex: 1,
     alignSelf: 'stretch',
     backgroundColor: '#fff',
     borderRadius: 5,
     borderWidth: 1,
     borderColor: '#26C83C',
     marginLeft: 5,
     marginRight: 5
   }
 };

export default BuyButton;
