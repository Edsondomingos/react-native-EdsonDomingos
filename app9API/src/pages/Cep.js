import { View, Text, TextInput, Button } from 'react-native'
import { useState } from 'react';
import axios from 'axios'

export default function App() {
    
    const [cep, setCep] = useState()
    const [cepResultado, setCepResultado] = useState('')
    
    async function buscaCep(){
      const resultado = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      setCepResultado(resultado.data)
    } 

    return (
      <View>
        <Text>Tela Cep</Text>
        <TextInput 
            style={{
                margin: 'auto', width:250,borderWidth: 1,
                outline: 0, marginVertical: 20,
            }}
            placeholder='CEP somente números'
            onChangeText={setCep}
            
            />
        <Button title='Pesquisar'            
            onPress={buscaCep}
        />
        <Text>Cidade: {cepResultado.localidade}</Text>
        <Text>UF: {cepResultado.uf}</Text>
        <Text>ddd: {cepResultado.ddd}</Text>
      </View>
    );
  }