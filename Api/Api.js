import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


// arquivo de teste de api
export  function Api() {

  const [noticias,setNoticias] = useState(null);
  const [abas, setAbas] = useState(0);


  useEffect(()=>{
      //api aqui
    fetch('', {
        method: 'GET'
      })
      .then(response => response.json())
      .then(function(json){

        setMovies(json);
      })
  },[])

  
  if(noticias != null){
      return(
        <View style={styles.container}>
            <StatusBar hidden />
            {
              noticias.results.map(function(val){
                if(val.id == abas){
                    return(
                    <View>
                        <TouchableOpacity onPress={()=>setAbas(val.id)}>
                            <Text style={{color:'white'}}>{val.original_title}</Text>
                        </TouchableOpacity>
                        <Text style={{color:'white'}}>{val.overview}</Text>
                    </View>
                    )
                }else{
                    return(
                      <View>
                        <TouchableOpacity onPress={()=>setAbas(val.id)}>
                            <Text style={{color:'black'}}>{val.original_title}</Text>
                        </TouchableOpacity>
                      </View>
                    )
                }
              })
            }
        </View>
      )
  }else{
    return(

     <View style={styles.container}>
       <Text>Carregando...</Text>
     </View>
    )
  }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
});
