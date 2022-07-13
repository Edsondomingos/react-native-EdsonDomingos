import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from './src/pages/Index';
import Cep from './src/pages/Cep';
import Temperatura from './src/pages/Temperatura';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Temperatura'>
        <Tab.Screen name='Index' component={Index} />
        <Tab.Screen name='Cep' component={Cep} />
        <Tab.Screen name='Temperatura' component={Temperatura} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
