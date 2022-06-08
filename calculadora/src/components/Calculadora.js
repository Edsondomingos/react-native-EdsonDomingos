import {useState} from 'react'
import { View, Text, Button } from 'react-native'
import Display from '../styles/Display'
import Buttons from '../styles/Buttons'



export default function Calculadora(){
    const [numeros, setNumeros] = useState([])
    let novaLista = []
    // function resultado(){
    //     //
    // }
    function addNumero(numero) {
        novaLista.push(numero)
        setNumeros(novaLista)
        // return setNumeros(numero)
    }

    return (
        <>
            <View style={Display.display}>
                <Text>{novaLista}</Text>
            </View>
            <View style={Buttons.buttons}>
                <Button title='C' color='red' style={Buttons.button} onPress={
                    () => setNumeros([])
                }/>
                <Button title='()' style={Buttons.button} />
                <Button title='%' style={Buttons.button} onPress={
                    () => addNumero('%')
                }/>
                <Button title='+' style={Buttons.button} />
            </View>
            <View style={Buttons.buttons}>
                <Button title='7' style={Buttons.button} onPress={
                    () => addNumero(7)
                }/>
                <Button title='8' style={Buttons.button} />
                <Button title='9' style={Buttons.button} />
                <Button title='-' style={Buttons.button} />
            </View>
            <View style={Buttons.buttons}>
                <Button title='4' style={Buttons.button} />
                <Button title='5' style={Buttons.button} />
                <Button title='6' style={Buttons.button} />
                <Button title='/' style={Buttons.button} />
            </View>
            <View style={Buttons.buttons}>
                <Button title='1' style={Buttons.button} />
                <Button title='2' style={Buttons.button} />
                <Button title='3' style={Buttons.button} />
                <Button title='X' style={Buttons.button} />
            </View>
            <View style={Buttons.buttons}>
                <Button title='+/-' style={Buttons.button} />
                <Button title='0' style={Buttons.button} />
                <Button title=',' style={Buttons.button} />
                <Button title='=' style={Buttons.button} />
            </View>
        </>
    )
    
}