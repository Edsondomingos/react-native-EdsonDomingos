import { View } from 'react-native';
import Stack from './src/navigation/Stack'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>      
    </View>
  );
}
