import {useState} from 'react'
import {View, Text, TextInput, Button} from 'react-native'

export default (props) => {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    return (
        <View>
            <Text>Tela Inicial</Text>
            <Text>Nome:</Text>{/*Testar Label */}
            <TextInput 
                placeholder='Digite o nome completo'
                /*Deu certo 
                 value={nome}
                 onChangeText={(nome) => setNome(nome)}
                */
                onChangeText={setNome}
            />
            <TextInput 
                placeholder='Digite seu CPF'
                onChangeText={setCpf}
                keyboardType='numeric'
            />
            <TextInput 
                placeholder='Digite uma senha'
                onChangeText={setSenha}
                secureTextEntry={true}
            />
            <Button 
                title='Enviar'
                // onPress={() => alert(nome)}
                onPress={() => props.navigation.navigate('Resultado', {nome:nome, cpf:cpf, senha:senha})}
            />
        </View>
    )
}