import React from 'react';
import {View, Text, TextInput, StyleSheet,Dimensions} from 'react-native';
import COLORS from '../../conts/colors';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Button from '../components/Buttons';


const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


const Done = ({
  label,
  iconName,
  error,
  password,
  navigation,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ width: width, height: height, backgroundColor: "#ffff" }}>
    <View style={{width:width,height:height*0.1,backgroundColor:COLORS.blue}}>
        <Text style={{fontSize:18,marginRight:width*0.04,color:"#ffff",marginTop:height*0.03}}>القياسات الرياضيه و الطبية للطلاب</Text>
    </View>
   <View style={{flexDirection:"row",marginTop:height*0.2}}>
       <Text style={{fontSize:50,marginLeft:width*0.55,color:"#2b468b"}}>شكرا</Text>
       <Icon name='check-circle' size={55} style={{marginLeft:5,color:"green"}} />
   </View>


   


    <Text style={{fontSize:25,marginRight:width*0.07,color:"#2b468b"}}>تم تسجيل البيانات بنجاح  </Text>

<View style={{width:width*0.4,alignItems:"center",alignSelf:"center",marginTop:height*0.14}}>
    <Button title="رجوع" 
            onPress={() => navigation.navigate('Click')}
 
            />
            </View>
    {/* <Text style={{fontSize:25,marginRight:width*0.07,color:"#2b468b"}}>وسيتم الرد فى اقرب وقت</Text> */}
    <Text style={{marginTop:height*0.05,marginRight:width*0.05,fontSize:13,color:"#568abc"}}>التعديل على معلوماتك</Text>
    <Text style={{marginRight:width*0.05,fontSize:13,color:"#2b468b"}}>مدعوم من <Text style={{color:"#568abc"}}>Microsofft Forms</Text> | الخصوصية وملفات تعريف الارتباط | تعليمات الاستخدام</Text>

</View>
  );
};



export default Done;