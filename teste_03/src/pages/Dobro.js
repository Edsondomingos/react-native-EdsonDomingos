import { View, Text, Button } from 'react-native'

export default (props) => {
    return (
        <View>
            <Text>Tela Dobro</Text>
            <Button title="Ir para Index" 
            onPress={() => props.navigation.navigate('Index')}/>
        </View>
    )
}