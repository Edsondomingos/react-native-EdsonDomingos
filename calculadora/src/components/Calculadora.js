import { View, Text, Button } from 'react-native'
import Buttons from '../styles/Buttons'



export default function Calculadora(){
    const [numeros, setNumeros] = useState([])
    
    function resultado(){
        //
    }
    function addNumero(numero){
        numeros.push()
    }

    return (
    <>
        <View style={Buttons.display}>
            <Text>{numeros}</Text>
        </View>
        <View style={Buttons.buttons}>
            <Button title='C' style={Buttons.button}/>
            <Button title='()' style={Buttons.button} />
            <Button title='%' style={Buttons.button} />
            <Button title='+' style={Buttons.button} />
        </View>
        <View style={Buttons.buttons}>
            <Button title='7' style={Buttons.button} onPressed={addNumero(7)}/>
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
    </>)
    
}