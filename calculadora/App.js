import * as React from 'react';
import { View,Text } from 'react-native';
import Calculadora from './src/components/Calculadora'
import Calculadora2 from './src/components/Calculadora2'
import Calculadora3 from './src/components/Calculadora3'
import Calculadora4 from './src/components/Calculadora4'
import Styles from './src/styles/styles'

export default function App() {
  return (
    <View style={Styles.container}>
      <Calculadora4 />
    </View>
  );
}
