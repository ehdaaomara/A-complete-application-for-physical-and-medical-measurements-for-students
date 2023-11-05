import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../conts/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const validate = async () => {
 
        navigation.navigate('Retreive');
  
};

const Click = ({
  navigation,
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
    <View style={{backgroundColor: COLORS.white, height: height * 1}}>
      <TouchableOpacity
        style={{
          height: height * 0.08,
          width: width * 0.7,
          backgroundColor:COLORS.blue,
          alignSelf: 'center',
          borderRadius: 30,
          flexDirection: 'row',
          shadowColor: '#000',
          // marginTop: height * 0.005,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 1,
          shadowRadius: 4,

          elevation: 15,
          marginTop:height*0.35
        
        }}
        // onPress={() => {
        //   // alert("kkk")
        // //   this.props.navigation.navigate('page_31');
        //   // this.sendData()
        // }}
        onPress={() => navigation.navigate('Info')}

        >
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.white,textAlign:"center",marginHorizontal:width*0.2}}>
            ادخال بيانات
          </Text>
          {/* <Text style={{ fontSize: 15, fontWeight: "bold", color: "#aaa", marginLeft: width * 0.045 }}>from nasr city, egypt</Text> */}
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        style={{
          height: height * 0.08,
          width: width * 0.7,
          backgroundColor:COLORS.blue,
          alignSelf: 'center',
          borderRadius: 30,
          flexDirection: 'row',
          shadowColor: '#000',
          marginTop: height * 0.04,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 1,
          shadowRadius: 4,

          elevation: 15,
        
        }}
        
        onPress={() => navigation.navigate('Retreive')}
        // onPress={validate}

        >
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.white,textAlign:"center",marginHorizontal:width*0.2}}>
             عرض البيانات
          </Text>
          {/* <Text style={{ fontSize: 15, fontWeight: "bold", color: "#aaa", marginLeft: width * 0.045 }}>from nasr city, egypt</Text> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({});

export default Click;
