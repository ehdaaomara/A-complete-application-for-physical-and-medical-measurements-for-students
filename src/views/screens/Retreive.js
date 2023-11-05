import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  
 } from 'react-native';
import COLORS from '../../conts/colors';
import Button from '../components/Buttons';
import Input from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';


import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';



// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


const Retreive = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    national: '',
  });


  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [user_info, set_user_info] = React.useState({});
  const [data_in, set_data_in] = React.useState(false);
// ??
  function upload_data() {
    let data = {
      nat_id: inputs.national,
    };
//  console.log(data)
    axios
        .post(
            'https://fcikfs.000webhostapp.com/ProjectKfs/select_info.php', data
        ).then((res) => {

 
            if (res.data.status == 'error') {
                Alert.alert("Warning" , res.data.message)
            }   else if (res.data.status == 'success') {
               
              set_data_in(true)
              set_user_info(res.data.message[0])
              // console.log(res.data)
              
            }
        })

  }

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.national ) {
      handleError('ادخل اسم الطالب ', 'national');
      isValid = false;
    }
    if(isValid){
      upload_data()
    }

  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };





    // const captureAndSaveToPDF = async () => {
    //   try {
    //     // Capture the current screen as an image
    //     const uri = await viewShotRef.current.capture();
  
    //     // Define the path where the PDF file will be saved
    //     const path = `${RNFetchBlob.fs.dirs.DownloadDir}/your_file_name.pdf`;
  
    //     // Convert the captured image to PDF
    //     RNFetchBlob.fs.writeFile(path, RNFetchBlob.wrap(uri), 'base64');
  
    //     console.log('PDF saved at:', path);
    //   } catch (error) {
    //     console.error('Error saving PDF:', error);
    //   }
    // };
  
    // const viewShotRef = React.useRef();
  



  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, height: height * 1}}>
      <Loader visible={loading} />
      <ScrollView>


        <View style={{paddingTop: 30, paddingHorizontal: 20,marginVertical: 2}}>
            <Input
              onChangeText={text => handleOnchange(text, 'national')}
              onFocus={() => handleError(null, 'ادخل اسم الطالب')}
              label="اسم الطالب :"
              placeholder="ادخل اسم الطالب"
              placeholderTextColor={COLORS.grey}
              error={errors.national}
              
            />
        </View>

        <View
          style={{
            width: width * 0.6,
            alignSelf: 'center',
            marginTop: height * -0.05,
          }}>
          <Button title="عرض البيانات" onPress={validate} />
        </View>



{data_in?(

        <View style={{backgroundColor:"#fafafc",height:height*0.93,width:width*0.9,borderRadius:25, shadowColor: '#000',
          marginTop: height * 0.01,marginBottom:height*0.1,alignSelf:"center",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 1,
          shadowRadius: 4,

          elevation: 5,}} >
<View style={{width:width*0.78,height:height*0.65 ,alignSelf:"center",marginTop:height*0.03}}>

<Text style={{color:COLORS.black,marginTop:8}}>اسم الطالب :   {user_info.nat_id}</Text>
{/* line */}
<View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{flex: 1, height: 1, backgroundColor: COLORS.blue}}
              />
              <View>
                <Text
                  style={{width: 90, textAlign: 'center', color: COLORS.blue,marginTop:7,marginBottom:7}}>
                  الكشف الطبي
                </Text>
              </View>
              <View
                style={{flex: 1, height: 1, backgroundColor: COLORS.blue}}
              />
            </View>

            <Text style={{color:COLORS.black}}>نتيجة قياس السكر  :   {user_info.user_diabetes == '1' ? (
               <Icon name='times' size={14} style={{color:"red"}} />
            ):
            <>
               <Icon name='check-circle' size={14} style={{color:"green"}} />
            </>
          
            }
</Text>
            <Text style={{color:COLORS.black,marginTop:10}}> نتيجة كشف الصدر :   {user_info.user_lung == '1' ? (
               <Icon name='times' size={14} style={{color:"red"}} />
            ):
            <>
               <Icon name='check-circle' size={14} style={{color:"green"}} />
            </>
          
            }</Text>
            <Text style={{color:COLORS.black,marginTop:10}}> نتيجة كشف القلب :   {user_info.user_heart == '1' ? (
               <Icon name='times' size={14} style={{color:"red"}} />
            ):
            <>
               <Icon name='check-circle' size={14} style={{color:"green"}} />
            </>
          
            }</Text>

            {/* <Text style={{color:COLORS.blue,marginTop:10,fontSize:14,fontWeight:"bold"}}>فحص والقياس النظر :</Text>
            <Text style={{color:COLORS.black,marginTop:10}}>قوة الابعاد  :  العين اليمني , {user_info.user_eyeright}        العين اليسري , {user_info.user_eyelift}
          
            </Text> */}
<Text style={{color:COLORS.black,marginTop:10}}>قوة ابصار العين اليمني :   {user_info.user_eyeright}</Text>
<Text style={{color:COLORS.black,marginTop:10}}>قوة ابصار العين اليسري :   {user_info.user_eyelift}</Text>


            <Text style={{color:COLORS.black,marginTop:10}}>بحاجه لعمل لنظارة  :   {user_info.user_glasses == '1' ? (
               <Icon name='times' size={14} style={{color:"red"}} />

            ):
            <>
               <Icon name='check-circle' size={14} style={{color:"green"}} />


            </>
          
            }</Text>



            <Text style={{color:COLORS.black,marginTop:13,fontWeight:"bold"}}>نتيجة الحالة الصحية للطالب :   {user_info.user_health == '1' ? (
                            <Text style={{color:COLORS.red}}>غير لائق</Text>

            ):
            <>
              <Text tyle={{color:"green"}}>لائق </Text>

            </>
          
            }</Text>

{/* خط */}
            <View style={{flexDirection: 'row', alignItems: 'center',marginTop:7}}>
              <View
                style={{flex: 1, height: 1, backgroundColor: COLORS.blue}}
              />
              <View>
                <Text
                  style={{width: 90, textAlign: 'center', color: COLORS.blue,marginTop:7,marginBottom:7}}>
                  الكشف الرياضي
                </Text>
              </View>
              <View
                style={{flex: 1, height: 1, backgroundColor: COLORS.blue}}
              />
            </View>

            <Text style={{color:COLORS.black,marginTop:10}}>الطول  :   {user_info.user_tall}</Text>
            <Text style={{color:COLORS.black,marginTop:10}}>الوزن  :   {user_info.user_weigh}</Text>
            <Text style={{color:COLORS.black,marginTop:10}}>مؤشر الكتله  :   {user_info.user_massive}</Text>

            <Text style={{color:COLORS.blue,marginTop:15,fontSize:14,fontWeight:"bold"}}>الكشف عن الانحرافات القوامية   :</Text>
            <Text style={{color:COLORS.black,marginTop:10}}>تفلطح القدمين  :   {user_info.user_foot == '1' ? (
               <Icon name='times' size={14} style={{color:"red"}} />
            ):
            <>
               <Icon name='check-circle' size={14} style={{color:"green"}} />
            </>
          
            }</Text>
            <Text style={{color:COLORS.black,marginTop:10}}>التصاق الركبتين  :   {user_info.user_knee == '1' ? (
               <Icon name='times' size={14} style={{color:"red"}} />
            ):
            <>
               <Icon name='check-circle' size={14} style={{color:"green"}} />
            </>
          
            }</Text>
            <Text style={{color:COLORS.black,marginTop:10}}>سقوط الكتفين  :   {user_info.user_shoulders == '1' ? (
               <Icon name='times' size={14} style={{color:"red"}} />
            ):
            <>
               <Icon name='check-circle' size={14} style={{color:"green"}} />
            </>
          
            }</Text>

<Text style={{color:COLORS.black,marginTop:13,fontWeight:"bold"}}>نتيجة فحص القوام :   {user_info.user_resexam == '1' ? (
              <Text style={{color:COLORS.red}}>غير لائق</Text>

            ):
            <>
                          <Text tyle={{color:"green"}}>لائق </Text>

            </>
          
            }</Text>
            <Text style={{color:COLORS.blue,marginTop:10,fontSize:14,fontWeight:"bold"}}>الاختبارات البدنيه   :</Text>
            <Text style={{color:COLORS.black,marginTop:10}}>القدرة :   القدرة للرجلين &#40; {user_info.user_capacityTestName} &#41; , القدرة للذراعين  &#40; {user_info.user_capacityRaw} &#41; </Text>
            <Text style={{color:COLORS.black,marginTop:10}}>السرعه  :   {user_info.user_speedRaw} </Text>
            <Text style={{color:COLORS.black,marginTop:10}}>المرونه  :   {user_info.user_flexRaw}</Text>
            <Text style={{color:COLORS.black,marginTop:10}}>الرشاقة  :   {user_info.user_fitRaw}</Text>


</View>


            </View>


):null }




      </ScrollView>
      <View
        style={{
          width: '100%',
          height: 60,
        }}></View>
    </SafeAreaView>
  );
};

export default Retreive;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: height * 0.02,
  },
  tableHeader: {
    backgroundColor: COLORS.light,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'center',
  },

  table: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidthTop: 0.5,
    borderBottomWidth: 0.5,
    width: 600,
    height: 50,
    textAlign: 'center',
    fontSize: 12,
    color: 'black',
    borderColor: 'black',
    borderRadius: 20,
  },
});
