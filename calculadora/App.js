import { View,Text } from 'react-native';
import Calculadora from './src/components/Calculadora'
import Calculadora2 from './src/components/Calculadora2'
import Styles from './src/styles/styles'

export default function App() {
  return (
    <View style={Styles.container}>
      <Calculadora2 />
    </View>
  );
}