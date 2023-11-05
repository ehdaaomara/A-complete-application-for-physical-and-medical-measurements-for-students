import React from 'react';
import {View, Text, TextInput, StyleSheet,Dimensions} from 'react-native';
import COLORS from '../../conts/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


const Input = ({
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
    <View style={{marginBottom: 20,borderRadius:20}}>
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
         <Icon
          name={iconName}
          style={{color: COLORS.blue, fontSize: 22, marginRight: 10}}
        />


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

{password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye" : "eye-slash"}
            style={{color: COLORS.blue, fontSize: 20}}

          />
        )}
       
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
    height: 55,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default Input;