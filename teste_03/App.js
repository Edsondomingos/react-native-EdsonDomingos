import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from './src/pages/Index'
import Dobro from './src/pages/Dobro'

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index}/>
        <Stack.Screen name="Dobro" component={Dobro}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}