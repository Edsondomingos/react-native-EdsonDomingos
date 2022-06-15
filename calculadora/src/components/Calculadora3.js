import {useState} from 'react'
import { View, Text, Button } from 'react-native'
import Display from '../styles/Display'
import Buttons from '../styles/Buttons'

const novaLista = []

export default function Calculadora(){
    const [numeros, setNumeros] = useState([])
    
    const teclas1 = ['C','()','%','+','7','8','9','-','4','5','6',
    '/','1','2','3','x','+/-','0',',','=']


    function resultado(){
        let res = novaLista.join('')
        console.log(res)
        return res
    }
    
    function addNumero(element) {
        if(busca != -1){
            novaLista.push(element)
            setNumeros(novaLista)
            console.log(numeros, novaLista)
            
        }
        if(element == '='){
            resultado()
        }
        
    }

    return (
        <>
            <View style={Display.display}>
                <Text>{numeros}</Text>
                {/* {console.log(novaLista)} */}
            </View>
            {/* <View style={Buttons.buttons}>
                {teclas1.map((element,index) => 
                    {
                        return <Button key={index} title={element}  style={Buttons.button} onPress={() => addNumero(element)} />
                     }
                )}
            </View> */}
            
                {teclas1.map((element,index) => 
                    {
                        
                        if(index+1 % 4 != 0){
                            return (
                            <View style={Buttons.buttons}>
                                <Button key={index} title={element}  style={Buttons.button} onPress={() => addNumero(element)} />
                            </View>
                            )
                        }
                        
                     }
                )}
            
            
        </>
    )
    
}