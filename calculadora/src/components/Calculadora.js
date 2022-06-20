import * as React from 'react';
import {useState} from 'react'
import { View, Text, Button } from 'react-native'
import Display from '../styles/Display'
import Buttons from '../styles/Buttons'


export default function Calculadora(){
    const [numeros, setNumeros] = useState([])
    // const [lastNumber, setLastNumber] = useState([])
    let novaLista = []
    function addNumero(numero) {
        novaLista.push(numero)
        setNumeros(novaLista)
    }

    return (
        <>
            <View style={Display.display}>
                <Text>{numeros}</Text>
            </View>
        {console.log(numeros,novaLista)}
            <View style={Buttons.buttons}>
                <Button title='C' color='red' style={Buttons.button} onPress={
                    () => novaLista = []
                }/>
                <Button title='()' style={Buttons.button} onPress={
                    () => addNumero('')
                } />
                <Button title='%' style={Buttons.button} onPress={
                    () => addNumero('%')
                }/>
                <Button title='+' style={Buttons.button} onPress={
                    () => addNumero('+')
                } />
            </View>

            <View style={Buttons.buttons}>
                <Button title='7' style={Buttons.button} onPress={
                    () => addNumero(7)
                }/>
                <Button title='8' style={Buttons.button} onPress={
                    () => addNumero(8)
                } />
                <Button title='9' style={Buttons.button} onPress={
                    () => addNumero(9)
                } />
                <Button title='-' style={Buttons.button} onPress={
                    () => addNumero('-')
                } />
            </View>

            <View style={Buttons.buttons}>
                <Button title='4' style={Buttons.button} onPress={
                    () => addNumero(4)
                } />
                <Button title='5' style={Buttons.button} onPress={
                    () => addNumero(5)
                } />
                <Button title='6' style={Buttons.button} onPress={
                    () => addNumero(6)
                } />
                <Button title='/' style={Buttons.button} onPress={
                    () => addNumero('/')
                } />
            </View>

            <View style={Buttons.buttons}>
                <Button title='1' style={Buttons.button} onPress={
                    () => addNumero(1)
                } />
                <Button title='2' style={Buttons.button} onPress={
                    () => addNumero(2)
                } />
                <Button title='3' style={Buttons.button} onPress={
                    () => addNumero(3)
                } />
                <Button title='X' style={Buttons.button} onPress={
                    () => addNumero('*')
                } />
            </View>

            <View style={Buttons.buttons}>
                <Button title='+/-' style={Buttons.button} onPress={
                    () => addNumero('')
                } />
                <Button title='0' style={Buttons.button} onPress={
                    () => addNumero(0)
                } />
                <Button title=',' style={Buttons.button} onPress={
                    () => addNumero('')
                } />
                <Button title='=' style={Buttons.button} onPress={
                    () => addNumero('')
                } />
            </View>
        </>
    )
    
}