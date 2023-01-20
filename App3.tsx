import React, { Component } from 'react';
import {Image, Text, TextInput, View, StyleSheet} from 'react-native';

import appjson from './app.json';

import irene from './image/index';

// const{defaul : irene} = await import('./image/irene.jpg');

// const irenejpg = Image.resolveAssetSource(irene).uri;

  console.log("Gambar : " + irene.irene);

const App = () => {
  return (
    <StylingReactNativeComponent />
    
  )
    
}

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

      <View>
        {/* <Image source={{uri : irenejpg}} style={styles.laptop} /> */}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize : 18,
    fontWeight: 'bold',
    color: '#8e44ad',
    marginBottom:0
  },
  laptop:{

  }
});

const SampleComponent = () => {
return(
  <View>
      <View style={{backgroundColor : '#2ecc71', width:80, height:80}} ></View>
        <Text>Bae Jo Hyun</Text>
        <Text>South Korea</Text>
        <Text>29 Maret 1990</Text>
        <Text>Alamat : <Alamat /> </Text>
        <Photo />
        <Text>Input : </Text><TextInput style={{ borderWidth:1}} />
        <BoxGreen />
        <Profile />
    </View>
)
}

const Alamat = () => {
  return <Text>South Korea</Text>
}

const Photo = () => {
  return (
    <Image 
      style={{width:100, height: 100}}
      source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Irene_at_a_fansigning_event_on_April_13%2C_2019_%281%29.jpg/220px-Irene_at_a_fansigning_event_on_April_13%2C_2019_%281%29.jpg'}} />
      // <Image style={{width:100, height:100}}
      // source={{uri : require('./../projectCoba/image/1.jpg')}} />
  )
  
}

class BoxGreen extends Component{
  render(){
    return(<Text>Ini komponen dari class BoxGreen</Text>)
  }
}

class Profile extends Component{
  render() {
    return(
      <View>
        <Image style={{width:80, height:80}} source={{uri : 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
        <Text>Ini kucing, ya beneran kucing</Text>
      </View>
    ) 
  }
}

export default App;