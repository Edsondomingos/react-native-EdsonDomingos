import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from './src/pages/Index'
import Contato from './src/pages/Contato'
import Sobre from './src/pages/Sobre'

//https://reactnavigation.org/docs/native-stack-navigator

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Index' screenOptions={{headerShown: false}}>
        {/* Quando definido com screen, automaticamente Index(screen) ja ganha propriedades(props)  */}
        <Stack.Screen name='Index' component={Index} options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'purple'
            }
          }} />
        <Stack.Screen name='Contato' component={Contato} options={{title: 'Contato'}}/>
        <Stack.Screen name='Sobre' component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}