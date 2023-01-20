import React from 'react';
import {Image, View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import irene from './images/irene.jpg';

const gambar = Image.resolveAssetSource(require('./images/irene.jpg')).uri;

console.log("Hasil : " + gambar);

const App = () => {
  return (
    <View>
      <ScrollView>
      <StylingReactNativeComponent />
      <StylingReactNativeComponent />
      <SampleComponent />
      </ScrollView>
    </View>
  )
};

export default App;