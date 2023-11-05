import React from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert, Dimensions,Image} from 'react-native';
import COLORS from '../../conts/colors';
import Button from '../components/Buttons';
import Input from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ScreenProp} from '../../conts/types';


const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const Splash = ({navigation}) => {
  
 
React.useEffect(() => {
  get_auth()
 }, []);
  
 async function get_auth(){
 let data = await AsyncStorage.getItem('logged')
 
 if(data == '1'){
navigation.navigate('Click')
 }else{
  navigation.navigate('Login')
 }
 }
  return (
     <>
     <Image
                            source={require("../../conts/images/1200px-شعار_جامعة_كفر_الشيخ.png")}
                            style={{ width:215, height: 240,alignSelf:"center",marginTop:height*0.23}}
                        />

     </>
  );
};

export default Splash;