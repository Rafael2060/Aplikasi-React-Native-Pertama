import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const StylingReactNativeComponent = () => {
    return(
      <View>
        <Text style={styles.text}>Styling Component</Text>
          <View style={{
            width:100, 
            height:100, 
            backgroundColor: '#f39c12',
            marginLeft:10,
            marginTop:10}} ></View>
  
        <View style={styles.kotak}>
          <Image source={require("./images/irene.jpg")} style={styles.img} />
          <Image source={require("./images/laptop1.jpg")} style={styles.img} />
          <Image source={require("./images/laptop2.jpg")} style={styles.img} />
        </View>
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize : 18,
      fontWeight: 'bold',
      color: '#8e44ad',
      marginBottom:0
    },
    img:{
      width:200,
      height:100,
      marginLeft : 5,
      marginBottom : 5,
      borderRadius:8
    },
    kotak:{
      padding:12,
      backgroundColor:'#f2f2f2',
      width:230
    }
  });

  export default StylingReactNativeComponent;