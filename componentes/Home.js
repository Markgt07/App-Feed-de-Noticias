import React,{useEffect,useState} from 'react';
import {View,Text,ScrollView,ImageBackground,TouchableOpacity,Image} from 'react-native';
import {db} from '../firebase.js';
import styles from '../styles.js';


    export function HomeScreen ({navigation}) {

    const [noticias,setNoticias] = useState([]);

    useEffect(()=>{
      db.collection('noticias').orderBy('data','desc').onSnapshot(snapshot=>{
        setNoticias(snapshot.docs.map(function(doc){

          return{info:doc.data()}

        }));
      })
    },[])
    //Expressão para
    //horizontal contentContainerStyle usado para a rolagem de noticias na horizontal
    //foi feita uma expressão para que quando for adicionadas noticias novas elas apareçam em destaque
    return(
      <View style= {{flex:1}}>
        <View style= {{flex:0.3}}>
          <ScrollView horizontal contentContainerStyle={{width:'190%',height:200,marginRight:3}} style= {styles.ScrollViewHome}>

            {
              noticias.map((val,index)=>{
                if(index < 2){
                  return(
              <ImageBackground style={styles.image} source={{ uri: val.info.imagem }}>
                <TouchableOpacity onPress={()=> navigation.navigate('Noticia',{
                  titulo: val.info.titulo,
                  conteudo: val.info.conteudo
                })} style={styles.TouchebleOpacityHome}>
                  <Text style={styles.TextoTituloHome}>{val.info.titulo}</Text>
                </TouchableOpacity>
            </ImageBackground>
                  )

                }
              })
            
            }
          </ScrollView>
        </View>

        <View style= {{flex:0.7,padding:20}}>
          <View style={styles.BarraMaisNoticias}></View>
          <Text>mais noticias</Text>

          <ScrollView contentContainerStyle ={{padding:20}} style={{flex:1}} >

          {
              noticias.map((val,index)=>{
                if(index >= 2){
                  return(
                    <View style={styles.ViewBtnNoticias}>
              <TouchableOpacity style={{flexDirection:'row'}} activeOpacity={0.3} onPress={()=> navigation.navigate('Noticia',{
                  titulo: val.info.titulo,
                  conteudo: val.info.conteudo,
                  imagem: val.info.imagem
                })}>
                <Image source={{uri:val.info.imagem}} style={styles.ImageBtnNoticias} />
                <View>
                  <Text style={styles.ViewTituloNoticias}>{val.info.titulo}</Text>
                  <Text style={styles.ViewResumoNoticias} numberOfLines={2}>{val.info.conteudo}</Text>
                </View>
              </TouchableOpacity>
              
            </View>
              )}
          })
        }

          </ScrollView>
        </View>
      </View>
    );
  }