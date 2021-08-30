import React from 'react';
import {View,Text,Button, ScrollView,ImageBackground,StyleSheet, TouchableOpacity,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as firebase from 'firebase';

  function HomeScreen ({navigation}) {
    return(
      <View style= {{flex:1}}>
        <View style= {{flex:0.3}}>

          <ScrollView horizontal contentContainerStyle={{width:'200%',height:250}} style= {{flex:1}}>

            <ImageBackground style={styles.image} source={{ uri: 'https://pdfmaranhao.com.br/storage/uploads/images/empresas/perfil/NVFRyxkmIL0J0OMOHfUfQWWJHubRNNlr2M3GCBr5.png' }}>
                <TouchableOpacity onPress={()=> navigation.navigate('Noticia',{
                  titulo:'Um titulo teste',
                  conteudo:'noticia de teste'
                })} style={{
                  width:'100%',
                  height:'100%',
                  backgroundColor:'rgba(0,0,0,0.5)',
                  justifyContent:'flex-end'
                }}>
                  <Text style={{fontSize:27,marginBottom:55,color:'white'}}>Noticia de exemplo</Text>
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
        <View style= {{flex:0.7,padding:20}}>
          <View style={{
            width:50,
            height:2,
            backgroundColor:'#069',
            position:'absolute',
            left:40,
            top:40
            }}></View>
          <Text>mais noticias</Text>
          <ScrollView contentContainerStyle ={{padding:20}} style={{flex:1}} >
            
            <View style={{flexDirection:'row',marginBottom:10}}>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('Noticia',{
                  titulo:'Um titulo teste',
                  conteudo:'noticia de teste'
                })}>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:100,height:100}} />
                <Text>Minha noticia de teste</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginBottom:10}}>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('Noticia',{
                  titulo:'Um titulo teste',
                  conteudo:'noticia de teste'
                })}>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:100,height:100}} />
                <Text>Minha noticia de teste</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginBottom:10}}>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('Noticia',{
                  titulo:'Um titulo teste',
                  conteudo:'noticia de teste'
                })}>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:100,height:100}} />
                <Text>Minha noticia de teste</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginBottom:10}}>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('Noticia',{
                  titulo:'Um titulo teste',
                  conteudo:'noticia de teste'
                })}>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:100,height:100}} />
                <Text>Minha noticia de teste</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginBottom:10}}>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('Noticia',{
                  titulo:'Um titulo teste',
                  conteudo:'noticia de teste'
                })}>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:100,height:100}} />
                <Text>Minha noticia de teste</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginBottom:10}}>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('Noticia',{
                  titulo:'Um titulo teste',
                  conteudo:'noticia de teste'
                })}>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:100,height:100}} />
                <Text>Minha noticia de teste</Text>
              </TouchableOpacity>
            </View>
            
          </ScrollView>
        </View>
      </View>
    );
  }
  function NoticiaScreen ({route,navigation}) {
    return(
      <View style= {{flex:1, alignItems:'center',justifyContent:'center'}}>
        <Text>{route.params.titulo}</Text>
        <Text>{route.params.conteudo}</Text>
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