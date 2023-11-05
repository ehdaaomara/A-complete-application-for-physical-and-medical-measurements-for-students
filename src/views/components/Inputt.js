import React from 'react';
import {View, Text, TextInput, StyleSheet,Dimensions} from 'react-native';
import COLORS from '../../conts/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


const Inputt = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 20,borderRadius:20,width:width*0.28,marginHorizontal:2.5}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
            borderRadius:20
          },
        ]}>
       
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: COLORS.darkBlue, flex: 1}}
          {...props}
        />
       
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12,marginHorizontal:10}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    marginHorizontal:10,
    fontSize: 14,
    color: COLORS.black,
  },
  inputContainer: {
    height: height*0.06,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    textAlign:"left",
alignItems:'flex-end',
alignSelf:"flex-end"
  },
});

export default Inputt;