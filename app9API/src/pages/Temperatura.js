import { View, Text, TextInput, Button } from 'react-native'
import { useState } from 'react';
import axios from 'axios'

export default function App() {
    
    const [cidade, setCidade] = useState('canguaretama')
    const [resultado, setResultado] = useState('')
    const [teste,setTeste] = useState('')
    
    async function buscaCidade(){
      const resultado = await axios.get(`https://goweather.herokuapp.com/weather/${cidade}`)
      setResultado(resultado.data)
      setTeste(resultado.data.forcast[0]['day'])
    } 

    return (
      <View>
        <Text>Tela Temperatura</Text>
        <TextInput 
            style={{
                margin: 'auto', width:250,borderWidth: 1,
                outline: 0, marginVertical: 20,
            }}
            placeholder='Digite o nome da cidade'
            onChangeText={setCidade}
            
            />
        <Button title='Pesquisar'            
            onPress={buscaCidade}
        />
        <Text>temperatura: {resultado.temperature}</Text>
        <Text>: {Object.keys(resultado)[3]}</Text>
        <Text>: {Object.values(Object.keys(resultado)[3])[0]['day']}</Text>
        <Text>: {Object.values(resultado)[2]}</Text>
        {/*<Text>{typeof teste}</Text>
        <Text>: {Object.values(resultado)[3][0].day}</Text>
        <Text>teste: {teste[0][0]}</Text>
        <Text>ddd: {resultado.ddd}</Text>*/}
      </View>
    );
  }