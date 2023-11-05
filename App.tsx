/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import SignUp from './src/views/screens/SignUp';
import Login from './src/views/screens/Login';
import Info from './src/views/screens/Info';
import Splash from './src/views/screens/Splash';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Click from './src/views/screens/Click';
import Done from './src/views/screens/Done';
import {StackParamList} from './src/conts/types';
import Retreive from './src/views/screens/Retreive';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// function App(): JSX.Element {
 
//   return (
//     <SafeAreaView >
//       <Done/>
      
      
      
     
//     </SafeAreaView>
//   );
// }



// export default App;




// const Stack = createNativeStackNavigator<StackParamList>();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Click" component={Click} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;



// import * as React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// import Login from './firebase/login';
// import Test from './Test';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}
     initialRouteName='Splash'
      >
        <Stack.Screen name='Splash' component={Splash} />

        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Click' component={Click} />
         <Stack.Screen name='Retreive' component={Retreive} />  
        <Stack.Screen name='Info' component={Info} />
        <Stack.Screen name='Done' component={Done} />


 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;