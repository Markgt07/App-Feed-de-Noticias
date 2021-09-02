import React,{useEffect,useState} from 'react';
import {View,Text,Button, ScrollView,ImageBackground,StyleSheet, TouchableOpacity,Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as firebase from 'firebase';
import {db} from './firebase.js';
import styles from './styles.js';
import  NoticiaScreen  from './componentes/NoticiaScreen.js';
import HomeScreen from  './componentes/Home';

  const Stack = createNativeStackNavigator();

  function App() {
    return (
      <NavigationContainer>
        <StatusBar hidden/>
        <Stack.Navigator>
          <Stack.Screen name="Portal" component={HomeScreen} options={{ headerStyle: {backgroundColor: '#34c9eb',},headerTintColor:'#fff',headerTitleStyle: {
              fontWeight: 'bold',
            }}}/>
          <Stack.Screen name="Noticia"  component={NoticiaScreen} options={{ headerStyle: {backgroundColor: '#34c9eb',},headerTintColor:'#fff',headerTitleStyle: {
              fontWeight: 'bold',}}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


  ;

  export default App;