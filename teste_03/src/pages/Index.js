import { View, Text, Button } from 'react-native'

export default (props) => {
    return (
        <View>
            <Text>Tela inicial</Text>
            <Button title="Ir para Dobro" 
            onPress={() => props.navigation.navigate('Dobro')} 
            testID='btnIndex'
            />
        </View>
    )
}