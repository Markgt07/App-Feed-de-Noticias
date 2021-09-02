import React,{} from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  {NoticiaScreen}  from './componentes/NoticiaScreen.js';
import {HomeScreen} from  './componentes/Home';

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
  };

  export default App;