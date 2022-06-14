import {useState} from 'react'
import { View, Text, Button } from 'react-native'
import Display from '../styles/Display'
import Buttons from '../styles/Buttons'

const novaLista = []

export default function Calculadora(){
    const [numeros, setNumeros] = useState([])
    
    // const teclas1 = ['C','()','%','+','7','8','9','-','4','5','6',
    // '/','1','2','3','x','+/-','0',',','=']
    const teclas1 = ['C','()','%','+']
    const teclas2 = ['7','8','9','-']
    const teclas3 = ['4','5','6','/']
    const teclas4 = ['1','2','3','x']
    const teclas5 = ['+/-','0',',','=']

    function resultado(){
        for(let i=0;i<novaLista.length;i++){
            
        }
    }
    
    function addNumero(numero) {
        novaLista.push(numero)
        setNumeros(novaLista)
        console.log(numeros, novaLista)
        
        // return novaLista
    }

    return (
        <>
            <View style={Display.display}>
                <Text>{numeros}</Text>
                {/* {console.log(novaLista)} */}
            </View>
            <View style={Buttons.buttons}>
                {teclas1.map((element,index) => 
                    {
                        return <Button key={index} title={element}  style={Buttons.button} onPress={() => addNumero(element)} />
                        // return <Button key={index} title={element}  style={Buttons.button} onPress={() => setNumeros(addNumero(element))} />
                        // return <Button key={index} title={element}  style={Buttons.button} onPress={() => {novaLista.push(element); setNumeros(novaLista); console.log(numeros)}} />
                    }
                )}
            </View>

            <View style={Buttons.buttons}>
                {teclas2.map((element,index) => 
                    {
                        return <Button key={index} title={element} onPress={() => addNumero(element)}/>
                    }
                )}
            </View>

            <View style={Buttons.buttons}>
                {teclas3.map((element,index) => 
                    {
                        return <Button key={index} title={element} onPress={() => addNumero(element)}/>
                    }
                )}
            </View>

            <View style={Buttons.buttons}>
                {teclas4.map((element,index) => 
                    {
                        return <Button key={index} title={element} onPress={() => addNumero(element)}/>
                    }
                )}
            </View>

            <View style={Buttons.buttons}>
                {teclas5.map((element,index) => 
                    {
                        return <Button key={index} title={element} onPress={() => addNumero(element)}/>
                    }
                )}
            </View>
            
        </>
    )
    
}