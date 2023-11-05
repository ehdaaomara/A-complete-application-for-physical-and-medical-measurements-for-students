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
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useMemo, useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import  { Component } from 'react';
import {DataTable} from 'react-native-paper';
import Inputt from '../components/Inputt';
import Inputtt from '../components/Inputtt';
import axios from 'axios';


// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Info = ({navigation}) => {
  const [inputs, setInputs,] = React.useState({
    name: '',
    national: '',
    tall: '',
    weigh: '',
    massive: '',
    raw1: '',
    test1: '',
    raw2: '',
    // test2:'',
    // standard2:'',
    raw3:'',
    // test3:'',
    // standard3:'',
    raw4:'',
    test4:'',
    // standard4:'',
    sugar:'',
    lung:'',
    heart:'',
    glasses:'',
    foot:'',
    knee:'',
    shoulders:'',
    eyelift:'',
    eyeright:'',
    health:''
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  function upload_data() {
    let data = {
      user_name: inputs.name,
      nat_id: inputs.national,
      user_diabetes: selectedId_suger,
      user_lung: selectedId_lung,
      user_heart: selectedId_heart,
      user_glasses: selectedId_glasses,
      user_tall: inputs.tall,
      user_weigh: inputs.weigh,
      user_massive: inputs.massive,
      user_foot: selectedId_foot,
      user_knee: selectedId_knee,
      user_shoulders: selectedId_shoulders,
      user_capacityTestName: inputs.test1,
      user_capacityRaw: inputs.raw1,
      // user_speedTestName: inputs.test2,
      user_speedRaw: inputs.raw2,
      // user_speedStandard: inputs.standard2,
      // user_flexTestName: inputs.test3,
      user_flexRaw: inputs.raw3,
      // user_flexStandard: inputs.standard3,
      // user_fitTestName: inputs.test4,
      user_fitRaw: inputs.raw4,
      // user_fitStandard: inputs.standard4,
      user_eyelift:inputs.eyelift,
      user_eyeright:inputs.eyeright,
      user_health: selectedId_health,
      user_resexam:selectedId_resexam,

    };
//  console.log(data)
    axios
        .post(
             'https://fcikfs.000webhostapp.com/ProjectKfs/add_info.php', data
        ).then((res) => {

console.log(res.data)
            if (res.data.status == 'error') {
                Alert.alert("try agine later")
            }   else if (res.data.status == 'success') {
               
              // Alert.alert('saved data ... !')

              navigation.navigate('Done');
            }
        })

  }

  // function bin(){
  //   if (radioButtons_suger)
  // }

  let radioButtons_suger = [
    {
      id: '1',
      value: '0', // acts as primary key, should be unique and non-empty string
      label: 'Option 1',
    
    },
    {
      id: '2',
      value: '1',
      label: 'Option 2',
   
    },
  ];

  let radioButtons_lung = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Option 3',
      value: '0',
    },
    {
      id: '2',
      label: 'Option 4',
      value: '1',
    },
  ];

  let radioButtons_heart = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Option 5',
      value: '0',
    },
    {
      id: '2',
      label: 'Option 6',
      value: '1',
    },
  ];

 

  let radioButtons_glasses = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Option 9',
      value: '0',
    },
    {
      id: '2',
      label: 'Option 10',
      value: '1',
    },
  ];

  let radioButtons_foot = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Option 11',
      value: '0',
    },
    {
      id: '2',
      label: 'Option 12',
      value: '1',
    },
  ];

  let radioButtons_knee = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Option 13',
      value: '0',
    },
    {
      id: '2',
      label: 'Option 14',
      value: '1',
    },
  ];

  let radioButtons_shoulders = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Option 15',
      value: '0',
    },
    {
      id: '2',
      label: 'Option 16',
      value: '1',
    },
  ];

  let radioButtons_health = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Option 17',
      value: '0',
    },
    {
      id: '2',
      label: 'Option 18',
      value: '1',
    },
  ];

  let radioButtons_resexam = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Option 19',
      value: '0',
    },
    {
      id: '2',
      label: 'Option 120',
      value: '1',
    },
  ];
  const [selectedId_lung, setselectedId_lung] = useState();
  const [selectedId_glasses, setselectedId_glasses] = useState();
  const [selectedId_foot, setselectedId_foot] = useState();
  const [selectedId_knee, setselectedId_knee] = useState();
  const [selectedId_shoulders, setselectedId_shoulders] = useState();
  const [selectedId_suger, setselectedId_suger] = useState();
  const [selectedId_heart, setselectedId_heart] = useState();
  const [selectedId_health, setselectedId_health] = useState();
  const [selectedId_resexam, setselectedId_resexam] = useState();



  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.name) {
      handleError('ادخل تاريخ الميلاد', 'name');
      isValid = false;
    }
    if (!inputs.tall) {
      handleError('ادخل الطول', 'tall');
      isValid = false;
    }
    if (!inputs.weigh) {
      handleError('ادخل الوزن', 'weigh');
      isValid = false;
    }
    if (!inputs.massive) {
      handleError('ادخل الكتله', 'massive');
      isValid = false;
    }
    if (!inputs.raw1) {
      handleError('ادخل القيمة', 'raw1');
      isValid = false;
    }
    if (!inputs.test1) {
      handleError('ادخل القيمة ', 'test1');
      isValid = false;
    }
    
    if (!inputs.raw2) {
      handleError('ادخل القيمة ', 'raw2');
      isValid = false;
    }
    // if (!inputs.test2) {
    //   handleError('ادخل اسم الاختبار', 'test2');
    //   isValid = false;
    // }
    // if (!inputs.standard2) {
    //   handleError('ادخل الدرجه المعياريه', 'standard2');
    //   isValid = false;
    // }
    if (!inputs.raw3) {
      handleError('ادخل القيمة ', 'raw3');
      isValid = false;
    }
    // if (!inputs.test3) {
    //   handleError('ادخل اسم الاختبار', 'test3');
    //   isValid = false;
    // }
    // if (!inputs.standard3) {
    //   handleError('ادخل الدرجه المعياريه', 'standard3');
    //   isValid = false;
    // }
    if (!inputs.raw4) {
      handleError('ادخل القيمة ', 'raw4');
      isValid = false;
    }
    // if (!inputs.test4) {
    //   handleError('ادخل اسم الاختبار', 'test4');
    //   isValid = false;
    // }
    // if (!inputs.standard4) {
    //   handleError('ادخل الدرجه المعياريه', 'standard4');
    //   isValid = false;
    // }
    if (!inputs.national ) {
      handleError('ادخل اسم الطالب   ', 'national');
      isValid = false;
    }
    if (!inputs.eyelift) {
      handleError('ادخل القيمة ', 'eyelift');
      isValid = false;
    }
    if (!inputs.eyeright) {
      handleError('ادخل القيمة ', 'eyeright');
      isValid = false;
    }
    if (isValid) {
    
      upload_data()
      // console.log(upload_data())
}
  };

  

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const handelSelection= (id)=>{
    setselectedId_suger(value);
  }

  //   const TableExample = () =>
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, height: height * 1}}>
      <Loader visible={loading} />
      <ScrollView>
        <View style={{paddingTop: 30, paddingHorizontal: 20}}>
          <View
            style={{
              height: height * 0.07,
              width: width * 0.5,
              borderWidth: 2,
              borderRadius: 25,
              borderColor: COLORS.blue,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: COLORS.blue,
                fontSize: 25,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              بطاقة الطالب
            </Text>
          </View>

          <View style={{marginVertical: 20}}>
           

            <Input
              onChangeText={text => handleOnchange(text, 'national')}
              onFocus={() => handleError(null, 'ادخل الاسم :')}
              label="اسم الطالب :"
              placeholder="ادخل اسم الطالب"
              placeholderTextColor={COLORS.grey}
              error={errors.national}
            />

<Input
              onChangeText={text => handleOnchange(text, 'name')}
              onFocus={() => handleError(null, 'ادخل التاريخ')}
              label="تاريخ الميلاد :"
              placeholder="ادخل تاريخ الميلاد"
              placeholderTextColor={COLORS.grey}
              error={errors.name}
            />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{flex: 1, height: 1, backgroundColor: COLORS.blue}}
              />
              <View>
                <Text
                  style={{width: 90, textAlign: 'center', color: COLORS.blue}}>
                  الكشف الطبي
                </Text>
              </View>
              <View
                style={{flex: 1, height: 1, backgroundColor: COLORS.blue}}
              />
            </View>

            <View></View>

            <DataTable style={styles.container}>
              <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{marginHorizontal: 10}}>
                  غير لائق
                </DataTable.Title>
                <DataTable.Title style={{marginHorizontal: 40}}>
                  {' '}
                  لائق
                </DataTable.Title>
                <DataTable.Title style={{marginHorizontal: 1}}>
                  المرض :
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <RadioGroup
                  radioButtons={radioButtons_suger}
                  // onPress={(id)=>{
                  //   Alert.alert(id)
                  // }}
                  onPress={setselectedId_suger}
                  selectedId={selectedId_suger}
                  
                  layout="row"
                  containerStyle={{width:250}}
                  // testID={Alert.alert(selectedId_suger)}
                  
                />
                <DataTable.Cell>السكر</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <RadioGroup
                  radioButtons={radioButtons_heart}
                  onPress={setselectedId_heart}
                  selectedId={selectedId_heart}
                  layout="row"
                  containerStyle={{width:250}}
                  testID="2"
                />
                <DataTable.Cell>قلب</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <RadioGroup
                  radioButtons={radioButtons_lung}
                  onPress={setselectedId_lung}
                  selectedId={selectedId_lung}
                  layout="row"
                  containerStyle={{width:250}}

                  testID="1"
                />
                <DataTable.Cell>صدر</DataTable.Cell>
              </DataTable.Row>
            </DataTable>

            {/* <DataTable style={styles.container}>
              <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{marginHorizontal: 10}}>
                  عين يسري{' '}
                </DataTable.Title>
                <DataTable.Title style={{marginHorizontal: 40}}>
                  {' '}
                  عين يمني
                </DataTable.Title>
                <DataTable.Title style={{marginHorizontal: 1}}>
                  قياس النظر :
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <RadioGroup
                  radioButtons={radioButtons_dimensions}
                  onPress={setselectedId_dimensions}
                  selectedId={selectedId_dimensions}
                  layout="row"
                  containerStyle={{width:205}}
                />
                <DataTable.Cell>قوة الابعاد</DataTable.Cell>
              </DataTable.Row>
            </DataTable> */}


<View style={{backgroundColor:"#fafafc",height:height*0.22,width:width*0.9,borderRadius:25,justifyContent:"center", shadowColor: '#000',
          marginTop: height * 0.03,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 1,
          shadowRadius: 4,

          elevation: 5,}} >
            <View >
              <View
                style={{
                  height: height * 0.05,
                  width: width * 0.31,
                  borderColor: COLORS.blue,
                  borderWidth: 1,
                  justifyContent: 'center',
                  borderRadius: 20,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.blue,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  قوة الابعاد :
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Inputtt
                  onChangeText={text => handleOnchange(text, 'eyelift')}
                  onFocus={() => handleError(null, 'ادخل القيمة ')}
                  label="العين اليسري :"
                  placeholder="ادخل  القيمة "
                  placeholderTextColor={COLORS.grey}
                  error={errors.eyelift}
                />

                <Inputtt
                  onChangeText={text => handleOnchange(text, 'eyeright')}
                  onFocus={() => handleError(null, 'ادخل القيمة ')}
                  label="العين اليمني :"
                  placeholder="ادخل  القيمة "
                  placeholderTextColor={COLORS.grey}
                  error={errors.eyeright}
                />
              </View>
             
            </View>
            </View>



            <DataTable style={styles.container}>
              <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{marginHorizontal: 10}}>
                  {' '}
                  لا
                </DataTable.Title>
                <DataTable.Title style={{marginHorizontal: 40}}>
                  {' '}
                  نعم
                </DataTable.Title>
                <DataTable.Title style={{marginHorizontal: 1}}>
                  {' '}
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <RadioGroup
                  radioButtons={radioButtons_glasses}
                  onPress={setselectedId_glasses}
                  selectedId={selectedId_glasses}
                  layout="row"
                  containerStyle={{width:205}}
                  
                />
                <DataTable.Cell style={styles.cell}>حاجه لنظاره</DataTable.Cell>
              </DataTable.Row>
            </DataTable>


            <DataTable style={styles.container}>
              <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{marginHorizontal: 10}}>
                  {' '}
                  غير لائق
                </DataTable.Title>
                <DataTable.Title style={{marginHorizontal: 40}}>
                  {' '}
                  لائق
                </DataTable.Title>
                <DataTable.Title style={{marginHorizontal: 1}}>
                  {' '}
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <RadioGroup
                  radioButtons={radioButtons_health}
                  onPress={setselectedId_health}
                  selectedId={selectedId_health}
                  layout="row"
                  containerStyle={{width:205}}
                  
                />
                <DataTable.Cell style={styles.cell}>الحاله الصحية</DataTable.Cell>
              </DataTable.Row>
            </DataTable>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <View
                style={{flex: 1, height: 1, backgroundColor: COLORS.blue}}
              />
              <View>
                <Text
                  style={{width: 90, textAlign: 'center', color: COLORS.blue}}>
                  الكشف الرياضي
                </Text>
              </View>
              <View
                style={{flex: 1, height: 1, backgroundColor: COLORS.blue}}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <Inputt
                onChangeText={text => handleOnchange(text, 'massive')}
                onFocus={() => handleError(null, 'ادخل الكتله')}
                label="مؤشر الكتلة"
                placeholder="ادخل  الكتله"
                placeholderTextColor={COLORS.grey}
                error={errors.massive}
              />
              <Inputt
                onChangeText={text => handleOnchange(text, 'weigh')}
                onFocus={() => handleError(null, 'ادخل الوزن')}
                label="الوزن "
                placeholder="ادخل  الوزن"
                placeholderTextColor={COLORS.grey}
                error={errors.weigh}
              />
              <Inputt
                onChangeText={text => handleOnchange(text, 'tall')}
                onFocus={() => handleError(null, 'ادخل الطول')}
                label="الطول "
                placeholder="ادخل  الطول"
                placeholderTextColor={COLORS.grey}
                error={errors.tall}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <View
                style={{flex: 1, height: 1, backgroundColor: COLORS.blue}}
              />
              <View>
                <Text
                  style={{width: 110, textAlign: 'center', color: COLORS.blue}}>
                  الكشف عن الانحارافات القواميه
                </Text>
              </View>
              <View
                style={{flex: 1, height: 1, backgroundColor: COLORS.blue}}
              />
            </View>

            <DataTable style={styles.container}>
              <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{marginHorizontal: 10}}>
                  غير لائق
                </DataTable.Title>
                <DataTable.Title style={{marginHorizontal: 40}}>
                  {' '}
                  لائق
                </DataTable.Title>
                <DataTable.Title style={{marginHorizontal: 1}}>
                  الصفه :
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <RadioGroup
                  radioButtons={radioButtons_foot}
                  onPress={setselectedId_foot}
                  selectedId={selectedId_foot}
                  layout="row"
                  containerStyle={{width:205}}

                />
                <DataTable.Cell >
                  تفلطح القدمين
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <RadioGroup
                  radioButtons={radioButtons_knee}
                  onPress={setselectedId_knee}
                  selectedId={selectedId_knee}
                  layout="row"
                  containerStyle={{width:200}}
                />
                <DataTable.Cell >
                  التصاق الركبتين
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <RadioGroup
                  radioButtons={radioButtons_shoulders}
                  onPress={setselectedId_shoulders}
                  selectedId={selectedId_shoulders}
                  layout="row"
                  containerStyle={{width:205}}

                />
                <DataTable.Cell>سقوط الكتفين</DataTable.Cell>
              </DataTable.Row>
            </DataTable>

            <DataTable style={styles.container}>
              <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={{marginHorizontal: 10}}>
                  {' '}
                  غير لائق
                </DataTable.Title>
                <DataTable.Title style={{marginHorizontal: 40}}>
                  {' '}
                  لائق
                </DataTable.Title>
                <DataTable.Title style={{marginHorizontal: 1}}>
                  {' '}
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <RadioGroup
                  radioButtons={radioButtons_resexam}
                  onPress={setselectedId_resexam}
                  selectedId={selectedId_resexam}
                  layout="row"
                  containerStyle={{width:205}}
                  
                />
                <DataTable.Cell style={styles.cell}>نتيجة الفحص</DataTable.Cell>
              </DataTable.Row>
            </DataTable>


            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <View
                style={{flex: 1, height: 1, backgroundColor: COLORS.blue}}
              />
              <View>
                <Text
                  style={{width: 110, textAlign: 'center', color: COLORS.blue}}>
                  الاختبارات البدنيه
                </Text>
              </View>
              <View
                style={{flex: 1, height: 1, backgroundColor: COLORS.blue}}
              />
            </View>

            <View style={{backgroundColor:"#fafafc",height:height*0.22,width:width*0.9,borderRadius:25,justifyContent:"center", shadowColor: '#000',
          // marginTop: height * 0.005,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 1,
          shadowRadius: 4,

          elevation: 5,}} >
              <View
                style={{
                  height: height * 0.05,
                  width: width * 0.25,
                  borderColor: COLORS.blue,
                  borderWidth: 1,
                  justifyContent: 'center',
                  borderRadius: 20,
                  alignSelf: 'center',
                  backgroundColor:COLORS.white
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.blue,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  القدرة :
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Inputtt
                  onChangeText={text => handleOnchange(text, 'test1')}
                  onFocus={() => handleError(null, 'ادخل القيمة ')}
                  label="للرجلين :"
                  placeholder="ادخل القيمة "
                  placeholderTextColor={COLORS.grey}
                  error={errors.test1}
                />

                <Inputtt
                  onChangeText={text => handleOnchange(text, 'raw1')}
                  onFocus={() => handleError(null, 'ادخل القيمة ')}
                  label="للذراعين :"
                  placeholder="ادخل القيمة"
                  placeholderTextColor={COLORS.grey}
                  error={errors.raw1}
                />
              </View>
              {/* <View style={{alignSelf: 'center'}}>
                <Inputtt
                  onChangeText={text => handleOnchange(text, 'standard1')}
                  onFocus={() => handleError(null, 'ادخل الدرجه المعياريه')}
                  label="درجة معياريه "
                  placeholder=" ادخل الدرجه المعياريه "
                  placeholderTextColor={COLORS.grey}
                  error={errors.standard1}
                />
              </View> */}
              {/* </View> */}
            </View>


            <View style={{backgroundColor:"#fafafc",height:height*0.22,width:width*0.9,borderRadius:25,justifyContent:"center", shadowColor: '#000',
          marginTop: height * 0.03,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 1,
          shadowRadius: 4,

          elevation: 5,}} >
            <View >
              <View
                style={{
                  height: height * 0.05,
                  width: width * 0.25,
                  borderColor: COLORS.blue,
                  borderWidth: 1,
                  justifyContent: 'center',
                  borderRadius: 20,
                  alignSelf: 'center',
                  marginTop:5,
                  marginBottom:-10

                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.blue,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  السرعة :
                </Text>
              </View>

              <View style={{alignItems:"center"}}>
                
                <Inputtt
                  onChangeText={text => handleOnchange(text, 'raw2')}
                  onFocus={() => handleError(null, 'ادخل قيمة السرعة')}
                  // label="درجة الخام "
                  placeholder="ادخل  قيمة السرعة"
                  placeholderTextColor={COLORS.grey}
                  error={errors.raw2}
                />
              </View>
              {/* <View style={{alignSelf: 'center'}}>
                <Inputtt
                  onChangeText={text => handleOnchange(text, 'standard2')}
                  onFocus={() => handleError(null, 'ادخل الدرجه المعياريه')}
                  label="درجة معياريه "
                  placeholder=" ادخل الدرجه المعياريه "
                  placeholderTextColor={COLORS.grey}
                  error={errors.standard2}
                />
              </View> */}
            </View>
            </View>



            <View style={{backgroundColor:"#fafafc",height:height*0.22,width:width*0.9,borderRadius:25,justifyContent:"center", shadowColor: '#000',
          marginTop: height * 0.03,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 1,
          shadowRadius: 4,

          elevation: 5,}} >
            <View>
              <View
                style={{
                  height: height * 0.05,
                  width: width * 0.25,
                  borderColor: COLORS.blue,
                  borderWidth: 1,
                  justifyContent: 'center',
                  borderRadius: 20,
                  alignSelf: 'center',
                  marginTop:5,
                  marginBottom:-10
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.blue,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  المرونه :
                </Text>
              </View>

              <View style={{alignItems:"center"}}>
                {/* <Inputtt
                  onChangeText={text => handleOnchange(text, 'test3')}
                  onFocus={() => handleError(null, 'ادخل اسم الاختبار')}
                  label="اسم الاختبار "
                  placeholder="ادخل  اسم الاختبار"
                  placeholderTextColor={COLORS.grey}
                  error={errors.test3}
                /> */}

                <Inputtt
                  onChangeText={text => handleOnchange(text, 'raw3')}
                  onFocus={() => handleError(null, 'ادخل قيمة المرونه')}
                  // label="درجة الخام "
                  placeholder="ادخل  قيمة المرونه"
                  placeholderTextColor={COLORS.grey}
                  error={errors.raw3}
                />
              </View>
              {/* <View style={{alignSelf: 'center'}}>
                <Inputtt
                  onChangeText={text => handleOnchange(text, 'standard3')}
                  onFocus={() => handleError(null, 'ادخل الدرجه المعياريه')}
                  label="درجة معياريه "
                  placeholder=" ادخل الدرجه المعياريه "
                  placeholderTextColor={COLORS.grey}
                  error={errors.standard3}
                />
              </View> */}
            </View>
            </View>


            <View style={{backgroundColor:"#fafafc",height:height*0.22,width:width*0.9,borderRadius:25,justifyContent:"center", shadowColor: '#000',
          marginTop: height * 0.03,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 1,
          shadowRadius: 4,

          elevation: 5,}} >
            <View>
              <View
                style={{
                  height: height * 0.05,
                  width: width * 0.25,
                  borderColor: COLORS.blue,
                  borderWidth: 1,
                  justifyContent: 'center',
                  borderRadius: 20,
                  alignSelf: 'center',
                  marginTop:5,
                  marginBottom:-10
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.blue,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    
                  }}>
                  الرشاقة :
                </Text>
              </View>

              <View style={{alignItems:"center"}}>
                {/* <Inputtt
                  onChangeText={text => handleOnchange(text, 'test4')}
                  onFocus={() => handleError(null, 'ادخل اسم الاختبار')}
                  label="اسم الاختبار "
                  placeholder="ادخل  اسم الاختبار"
                  placeholderTextColor={COLORS.grey}
                  error={errors.test4}
                /> */}

                <Inputtt
                  onChangeText={text => handleOnchange(text, 'raw4')}
                  onFocus={() => handleError(null, 'ادخل القيمة')}
                  // label="درجة الخام "
                  placeholder="ادخل  القيمة"
                  placeholderTextColor={COLORS.grey}
                  error={errors.raw4}
                />
              </View>
              {/* <View style={{alignSelf: 'center'}}>
                <Inputtt
                  onChangeText={text => handleOnchange(text, 'standard4')}
                  onFocus={() => handleError(null, 'ادخل الدرجه المعياريه')}
                  label="درجة معياريه "
                  placeholder=" ادخل الدرجه المعياريه "
                  placeholderTextColor={COLORS.grey}
                  error={errors.standard4}
                />
              </View> */}
            </View>
</View>
        

            <Button title="تسجيل البيانات"
             onPress={validate} 
        //     onPress={() => {
        //   // alert("kkk")
        // //   this.props.navigation.navigate('page_31');
        //   // this.sendData()
        //   console.log(validate())
        //   // validate
        // }}
            />


          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          height: 60,
        }}></View>
    </SafeAreaView>
  );
};

export default Info;

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
cell:{
  width:20,
  textAlign:"center",
  alignSelf:"center",
  // color:COLORS.red
  // backgroundColor:COLORS.red
}
 
});
