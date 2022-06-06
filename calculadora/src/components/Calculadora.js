import { View, Text } from 'react-native'
import Styles from '../styles/styles'
import Button from '../styles/Buttons'


export default function Calculadora(){
    return (
    <>
        <View>
            <Text>Numeros e resultados</Text>
        </View>
        <View style={Button.buttons}>
            <Text style={Button.button}>C</Text>
            <Text style={Button.button}>()</Text>
            <Text style={Button.button}>%</Text>
            <Text style={Button.button}>+</Text>
        </View>
        <View style={Button.buttons}>
            <Text style={Button.button}>7</Text>
            <Text style={Button.button}>8</Text>
            <Text style={Button.button}>9</Text>
            <Text style={Button.button}>-</Text>
        </View>
        <View style={Button.buttons}>
            <Text style={Button.button}>4</Text>
            <Text style={Button.button}>5</Text>
            <Text style={Button.button}>6</Text>
            <Text style={Button.button}>/</Text>
        </View>
        <View style={Button.buttons}>
            <Text style={Button.button}>1</Text>
            <Text style={Button.button}>2</Text>
            <Text style={Button.button}>3</Text>
            <Text style={Button.button}>X</Text>
        </View>
        <View style={Button.buttons}>
            <Text style={Button.button}>+/-</Text>
            <Text style={Button.button}>0</Text>
            <Text style={Button.button}>,</Text>
            <Text style={Button.button}>=</Text>
        </View>
    </>)
    
}