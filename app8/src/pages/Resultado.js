import {View, Text, TextInput, Button} from 'react-native'

export default (props) => {
    return (
        <View>
            <Text>Tela Resultado</Text>
            <Text>{props.route.params.nome}</Text>
            <Text>{props.route.params.cpf}</Text>
            <Text>{props.route.params.senha}</Text>
        </View>
    )
}