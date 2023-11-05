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

const Login = ({navigation}) => {
  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);




  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('يجب ادخال اسم المستخدم', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('يجب ادخال كلمة السر', 'password');
      isValid = false;
    }
    if (isValid) {
     
          login()
    }
  };

  async function login () {
    setLoading(true);
   
    setTimeout(async () => {
      setLoading(false);
     
        if (
          inputs.email == "fci_kfs" &&
          inputs.password == "kfs_787572"
        ) {
          navigation.navigate('Click');
          AsyncStorage.setItem('logged' , '1')
          AsyncStorage.setItem(
            'userData',
            JSON.stringify({...userData, loggedIn: true}),
          );
        } else {
          Alert.alert('Error', 'User does not exist');
        }
      
     
                

    }, 2000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white ,height:height*1}}>
      <Loader visible={loading} />
      <View style={{paddingTop: 50, paddingHorizontal: 20}}>
      <Image
                            source={require("../../conts/images/1200px-شعار_جامعة_كفر_الشيخ.png")}
                            style={{ width: 120, height: 135,alignSelf:"center" }}
                        />

        <Text style={{color: COLORS.black, fontSize: 35, fontWeight: 'bold',marginTop:height*0.05}}>
          تسجيل الدخول
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 12}}>
          ادخل بياناتك للدخول
        </Text>
       
        <View style={{marginVertical: 12}}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="user"
            label="اسم المستخدم :"
            placeholder="ادخل اسم المستخدم"
            placeholderTextColor={COLORS.grey}

            error={errors.email}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock"
            label="كلمة السر :"
            placeholder="ادخل كلمة السر"
            placeholderTextColor={COLORS.grey}

            error={errors.password}
            
          />
          <Button title="تسجيل" 
          onPress={validate}
                      />
         
        </View> 
      </View>
    </SafeAreaView>
  );
};

export default Login;