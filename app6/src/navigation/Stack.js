import Index from '../screens/Index'
import Contato from '../screens/Contato'
import Sobre from '../screens/Sobre'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator() //Da poder para variavei Stack

export default () => {
    return (
        <Stack.Navigator initialRouteName='Index'>
            <Stack.Screen name="Index" component={Index}/>
            <Stack.Screen name="Contato" component={Contato}/>
            <Stack.Screen name="Sobre" component={Sobre}/>
        </Stack.Navigator>
    )
}