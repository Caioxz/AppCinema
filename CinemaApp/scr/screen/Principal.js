
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';
import {  StyleSheet,Text, View ,Image  } from 'react-native';
import { Entypo, AntDesign,Octicons  } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import coringa from './assets/coringa.jpg';
import adao_negro from './assets/adao.jpg';
import liga_justica from './assets/ligaJustica.jpg';
import thor from './assets/thor.jpg';
import avangers from './assets/avamgers.jpg';
import guerra_civil from './assets/guerraCivil.jpg';




export default function Principal({ navigation }) {
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Text animation='fadeInLeft' delay={400} style={styles.headerText}>Filmes</Animatable.Text>
        <Text style={styles.estadoText}>São Paulo</Text>
        <TouchableOpacity style={{ marginLeft: '10', left:130, top:-11,  }} onPress={() => navigation.openDrawer()}>
          <Octicons name="three-bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={[styles.cartaz, styles.borderBottom]}>Em Cartaz</Text>
      </View>

      <View style={styles.movieContainerDc} >
        <TouchableOpacity>
        <Animatable.Image     
         animation="zoomIn" duration={500} delay={400}
          style={styles.movieImageDc}
          source={coringa}
        />
      </TouchableOpacity>

        <TouchableOpacity>
         <Animatable.Image  
          animation="zoomIn"  delay={600}
           style={styles.movieImageDc}
          source={adao_negro}
         />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Animatable.Image     
          animation="zoomIn"  delay={1000}
           style={styles.movieImageDc}
            source={liga_justica}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.movieContainerMv} >
        <TouchableOpacity>
        <Animatable.Image     
        animation="zoomIn"  delay={900}
          style={styles.movieImageMv}
          source={thor}
        />
        
      </TouchableOpacity>

        <TouchableOpacity>
         <Animatable.Image  
          animation="zoomIn"  delay={800}
           style={styles.movieImageMv}
          source={avangers}
         />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Animatable.Image     
          animation="zoomIn"  delay={1000}
           style={styles.movieImageMv}
            source={guerra_civil}
          />
        </TouchableOpacity>
      </View>

      <Animatable.View  animation="zoomIn"  delay={900} style={styles.avalicãoCoringa}>

          <Text style={styles.textoAvaliaçãoCoringa}><AntDesign name="star" size={14} color="red" /> avaliação Hoje</Text>
          <Text style={[styles.titlePerso,{left: 30}]}>coringa</Text>
          
      </Animatable.View>

      <Animatable.View animation="zoomIn" delay={1000}  style={styles.avalicãoAdao}>
        <Text style={styles.textoAvaliaçãoAdao}><AntDesign name="star" size={14} color="red" /> avaliação Hoje</Text>
        <Text style={styles.titlePerso}>Adão Negro</Text>
        
      </Animatable.View>

      <Animatable.View  animation="zoomIn"  delay={1000}  style={styles.avalicãoLigaJustice}>

        <Text style={styles.textoAvaliaçãoLigaJustce}><AntDesign name="star" size={14} color="red" /> avaliação Hoje</Text>
         <Text style={[styles.titlePerso,{left: 10}]}>Liga da Justiça</Text>
        
      </Animatable.View>





      <Animatable.View   animation="zoomIn"  delay={1000} style={styles.avalicãoThor}>

          <Text style={styles.textoAvaliaçãoThor}><AntDesign name="star" size={14} color="red" /> avaliação Hoje</Text>
          <Text style={[styles.titlePerso,{left: 10}]}>Thor Ragnarok</Text>
          
      </Animatable.View>

      <Animatable.View  animation="zoomIn"  delay={1100}  style={styles.avalicãoAvaners}>
        <Text style={styles.textoAvaliaçãoAvaners}><AntDesign name="star" size={14} color="red" /> avaliação Hoje</Text>
        <Text style={[styles.titlePerso,{left: 27 }]}>Avangers</Text>
        
      </Animatable.View>

      <Animatable.View animation="zoomIn"  delay={1200} style={styles.avalicãoGuerraCivil}>

        <Text style={styles.textoAvaliaçãoGuerraCivil}><AntDesign name="star" size={14} color="red" /> avaliação Hoje</Text>
         <Text style={[styles.titlePerso,{left: 25}]}>Guerra Civil</Text>
        
      </Animatable.View>
      

    
    </View>
  );
}

const styles = StyleSheet.create({


  container: {
    backgroundColor: '#494949',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    width: '110%',
    height: '110%',
  },

 header: {
  backgroundColor: '#212021',
  padding: 10,
  width: '100%',
  height: 120, 
  alignItems: 'center',
  justifyContent: 'center',
  top: -34,
},
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    top: '28%',
    left: '-43%',
  },

  estadoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    top: '10%',
    left: '10%',
  },

  iconContainer: {
    position: 'relative',
    top: -10,
    left:109,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    color: 'white',
    marginLeft: 10,
  },

  cartaz: {
    color: '#fb1c0a',
    fontFamily: 'Sans-serif',
    marginBottom: 1,
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    paddingHorizontal: 65,
    
  },

  borderBottom: {
    top: 19,
    right: 17,
  },
  movieContainerDc: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
   
  },

  movieImageDc: {
    width: 110,
    height: 170,
    borderRadius: 5,
    marginHorizontal: 5,
    position: 'relative',
    left: -27,
    top: -20
  
  },

  movieContainerMv: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
   
  },

  movieImageMv: {
    width: 110,
    height: 170,
    borderRadius: 5,
    marginHorizontal: 5,
    position: 'relative',
    left: -27,
    top: 79
  
  },



//--------------------- DC ----------------------------------- //
  avalicãoCoringa: {
    backgroundColor: '#202020',
    height:37, 
    left: -149,
    width: 113,
    top: -190, 
    borderRadius: 13,
  },

  textoAvaliaçãoCoringa:{
    top: 10,
    left: 8 ,
    fontSize: 13,
    color: 'red',
    alignItems: 'center',

  },


  avalicãoAdao:{
    backgroundColor: '#202020',
    height:37, 
    right: 30,
    width: 119,
    top: -228,  
    borderRadius: 13,
  },

  textoAvaliaçãoAdao:{
    top: 10,
    left: 8 ,
    fontSize: 13,
    color: 'red',
    alignItems: 'center',
  },

  avalicãoLigaJustice:{
      backgroundColor: '#202020',
      height:37, 
      left: 92,
      width: 119,
      top: -262,
      borderRadius: 13,
  },

  textoAvaliaçãoLigaJustce:{
    top: 10,
    left: 8 ,
    fontSize: 13,
    color: 'red',
    alignItems: 'center',
  },

  titlePerso:{
    color: 'white',
    fontFamily: 'Sans-serif',
    top: 20,
    left: 20, 
  },
 //------------- MARVEL --------------------//
 
 avalicãoThor: {
  backgroundColor: '#202020',
  height:37, 
  left: -149,
  width: 113,
  top: -20, 
  borderRadius: 13,
},

textoAvaliaçãoThor:{
  top: 10,
  left: 8 ,
  fontSize: 13,
  color: 'red',
  alignItems: 'center',
},


avalicãoAvaners:{
  backgroundColor: '#202020',
  height:37, 
  right: 30,
  width: 119,
  top: -58,  
  borderRadius: 13,
},

textoAvaliaçãoAvaners:{
  top: 10,
  left: 8 ,
  fontSize: 13,
  color: 'red',
  alignItems: 'center',
},
avalicãoGuerraCivil:{
  backgroundColor: '#202020',
  height:37, 
  left: 92,
  width: 119,
  top: -96,
  borderRadius: 13,
},

textoAvaliaçãoGuerraCivil:{
  top: 10,
  left: 8 ,
  fontSize: 13,
  color: 'red',
  alignItems: 'center',
},

});