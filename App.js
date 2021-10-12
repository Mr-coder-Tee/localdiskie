import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {LogIn,SignUp,PostScreen,AddFicture} from './Components/index'
import Tabs from './Components/Tab/Tab'
import {Figure} from './Components/TabScreens/index'



const Stack = createStackNavigator();





export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Tab"}>

        <Stack.Screen name="Tab" component={Tabs}/>
        <Stack.Screen name="Signup" component={SignUp}/>
        <Stack.Screen name="Login" component={LogIn}/>
        <Stack.Screen name="Splashscreen" component={Tabs}/>
        <Stack.Screen name="Landingpage" component={Tabs}/>
        <Stack.Screen name="Post" component={PostScreen}/>
        <Stack.Screen name="AddFicture" component={AddFicture}/>


        <Stack.Screen name="design" component={AddFicture}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
