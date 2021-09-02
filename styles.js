import React from 'react';
import {StyleSheet} from 'react-native';


    export default StyleSheet.create({
        //Home
        ScrollViewHome:{
            flex:1,
            marginTop:3,
            marginLeft:3,
        },

        TouchebleOpacityHome:{
            width:'100%',
            height:'100%',
            backgroundColor:'rgba(0,0,0,0.5)',
            justifyContent:'flex-end'
        },

        TextoTituloHome:{
            fontSize:27,
            marginBottom:25,
            color:'white'
        },
        //Estilização dos botoes de noticias da pagina home
        ViewBtnNoticias:{
            flexDirection:'row',
            marginBottom:10,
            borderWidth:3,
            borderColor:'rgba(174, 183, 194,0.2)',
            borderRadius:8
        },

        ViewTituloNoticias:{
            padding:10,
            color:'rgba(66, 141, 227,1)'
        },

        ViewResumoNoticias:{
            alignContent:'flex-start',
            marginRight:100,
            marginLeft:10,
            width:190,
            fontSize:12
        },

        BarraMaisNoticias:{
            width:50,
            height:2,
            backgroundColor:'#069',
            position:'absolute',
            left:40,
            top:40
        },

        ImageBtnNoticias:{
            width:100,
            height:100,
            overflow:'hidden',
            borderRadius:9,


        },

        // Estilização das Noticias
        ViewTitulo:{
            width:'100%',
            height:'100%',
            backgroundColor:'rgba(0,0,0,0.5)',
            justifyContent:'flex-end',
            padding:10
        },

        Conteudo:{
            fontSize:14,
            padding:22,
            margin:5
        },

        // Estilização das imagens
        image: {
            resizeMode: 'cover',
            justifyContent:'flex-end',
            width:'100%',
            flex:1,
            overflow:'hidden',
            borderRadius:15,
            marginRight:3
          
        },

        imageConteudo: { 
            resizeMode: 'cover',
            width:'100%',
            flex:0.5,
            height:200
        }
      
      });