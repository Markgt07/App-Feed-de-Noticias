import React from 'react';
import {View,Text,Button, ScrollView,ImageBackground,StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as firebase from 'firebase';

  function HomeScreen ({navigation}) {
    return(
      <View style= {{flex:1}}>

        <ScrollView horizontal contentContainerStyle={{width:'200%',height:250}} style= {{flex:1}}>

          <ImageBackground style={styles.image} source={{ uri: 'https://pdfmaranhao.com.br/storage/uploads/images/empresas/perfil/NVFRyxkmIL0J0OMOHfUfQWWJHubRNNlr2M3GCBr5.png' }}>
              <TouchableOpacity onPress={()=> navigation.navigate('Noticia')} style={{
                width:'100%',
                height:'100%',
                backgroundColor:'rgba(0,0,0,0.5)',
                justifyContent:'flex-end'
              }}>
                <Text style={{fontSize:27,color:'white'}}>Noticia de exemplo</Text>
              </TouchableOpacity>
          </ImageBackground>

          <ImageBackground style={styles.image} source={{ uri: 'https://pdfmaranhao.com.br/storage/uploads/images/empresas/perfil/NVFRyxkmIL0J0OMOHfUfQWWJHubRNNlr2M3GCBr5.png' }}>
              <TouchableOpacity style={{
                width:'100%',
                height:'100%',
                backgroundColor:'rgba(0,0,0,0.5)',
                justifyContent:'flex-end'
              }}>
                <Text style={{fontSize:27,color:'white'}}>Noticia de exemplo</Text>
              </TouchableOpacity>
          </ImageBackground>


        </ScrollView>


      </View>
    );
  }
  function NoticiaScreen ({navigation}) {
    return(
      <View style= {{flex:1, alignItems:'center',justifyContent:'center'}}>
        
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Portal" component={HomeScreen} />
        <Stack.Screen name="Noticia" component={NoticiaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    resizeMode: 'cover',
    justifyContent:'center',
    width:'100%'
  }
});

export default App;