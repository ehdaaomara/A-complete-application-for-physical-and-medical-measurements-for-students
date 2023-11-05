import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../../conts/colors';
const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: COLORS.blue,
        marginVertical: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        shadowColor: 'black',
shadowOpacity: 0.8,
elevation: 7,
shadowRadius: 20 ,
shadowOffset : { width: 50, height: 5},
borderWidth:0,
      }}>

      <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;