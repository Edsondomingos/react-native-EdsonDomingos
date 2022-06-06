import { View, Text, Button } from 'react-native'

export default (props) => {
    return (
        <View>
            <Text>Tela inicial</Text>
            <Button title="Mudar para contato" onPress={() => props.navigation.navigate('Contato')}/>
        </View>
    )
}