import React from 'react';
import {View,Text,ScrollView,ImageBackground} from 'react-native';
import styles from '../styles.js';


    
    export function NoticiaScreen ({route,navigation}) {
        return(
        <View style={{flex:1}}>
            <ScrollView style= {{flex:1}}>
            <ImageBackground style={styles.imageConteudo} source={{ uri: route.params.imagem }}>
                <View style={styles.ViewTitulo}>      
                <Text style={{fontSize:23,color:'white'}}>{route.params.titulo}</Text>
                </View>      
            </ImageBackground>
            <View style={{flex:1}}>  
                <Text style={styles.Conteudo}>{route.params.conteudo}</Text>
                
            </View>
            </ScrollView>
        </View>
        );
    }