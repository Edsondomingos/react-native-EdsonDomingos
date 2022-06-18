import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from './src/pages/Index'
import Resultado from './src/pages/Resultado'

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index}/>
        <Stack.Screen name="Resultado" component={Resultado}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}