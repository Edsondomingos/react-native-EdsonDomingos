import { View } from 'react-native';
import Calculadora from './src/components/Calculadora'
import Styles from './src/styles/styles'

export default function App() {
  return (
    <View style={Styles.container}>
      <Calculadora />
    </View>
  );
}