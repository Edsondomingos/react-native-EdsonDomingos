import {useState} from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'
import Display from '../styles/Display'
import Buttons from '../styles/Buttons'

const novaLista = []

export default function Calculadora(){  
    
    // const teclas1 = ['C','()','%','+','7','8','9','-','4','5','6',
    // '/','1','2','3','x','+/-','0',',','=']
    const teclas1 = ['C','()','%','+']
    const teclas2 = ['7','8','9','-']
    const teclas3 = ['4','5','6','/']
    const teclas4 = ['1','2','3','x']
    const teclas5 = ['+/-','0','.','=']

    const [numeros, setNumeros] = useState([])

    function resultado(){
        // let res
        // for(let i=0;i<novaLista.length;i++){
        //     res = novaLista[i]
        // }
        // return res
        let res = novaLista.join('')
        console.log(typeof res)
        // return res
        setNumeros(res)
    }

    function Tela(){
        return <Text onChangeText={setNumeros}>{numeros}</Text>
    }
    
    function addNumero(element) {
        let busca = element.indexOf('=' || 'C' || '()' || '%' || '+/-')
        // let rg = '/[=C()%+/-]/g'
        if(
            element != '=' &&
            element != 'C' &&
            element != '()' &&
            element != '%' &&
            element != '+/-'
            ){
            novaLista.push(element)
            
            // console.log(numeros, novaLista)
            
        }
        if(element == '='){
            resultado()
        }
        setNumeros(novaLista)
        Tela()
    }
    const teste = ['555',112]
    return (
        <>
            <View style={Display.display}>
                <Tela/><Text>{numeros}</Text>
                {/* <Text>{() => novaLista.map(element => element)}</Text> */}
                {/* <Text>{() => novaLista.forEach(element => element)}</Text> */}
                {/* <Text>{teste}</Text> */}
                {console.log(numeros)}
            </View>
            <View style={Buttons.buttons}>
                {teclas1.map((element,index) => 
                    {
                        return (
                            <TouchableHighlight 
                                style={Buttons.button}
                                // onPress={() => addNumero(element)}
                            >
                                <Text key={index} style={Buttons.detalhe}>{element}</Text>
                            </TouchableHighlight>
                        )
                        // <Button key={index} title={element}  style={Buttons.button} onPress={() => addNumero(element)} />
                        // return <Button key={index} title={element}  style={Buttons.button} onPress={() => setNumeros(addNumero(element))} />
                        // return <Button key={index} title={element}  style={Buttons.button} onPress={() => {novaLista.push(element); setNumeros(novaLista); console.log(numeros)}} />
                    }
                )}
            </View>

            <View style={Buttons.buttons}>
                {teclas2.map((element,index) => 
                     {
                        return (
                            <TouchableHighlight 
                                style={Buttons.button}
                                // onPress={() => addNumero(element)}
                                onPress={() => {
                                    if(
                                        element != '=' &&
                                        element != 'C' &&
                                        element != '()' &&
                                        element != '%' &&
                                        element != '+/-'
                                        ){
                                        novaLista.push(element)
                                        setNumeros(novaLista)
                                        console.log(numeros, novaLista)
                                        
                                    }
                                    if(element == '='){
                                        resultado()
                                    }
                                    
                                    }
                                }
                            >
                                <Text key={index} style={Buttons.detalhe}>{element}</Text>
                            </TouchableHighlight>
                        )
                    }
                )}
            </View>

            <View style={Buttons.buttons}>
                {teclas3.map((element,index) => 
                    {
                        return (
                            <TouchableHighlight 
                                style={Buttons.button}
                                onPress={() => addNumero(element)}
                            >
                                <Text key={index} style={Buttons.detalhe}>{element}</Text>
                            </TouchableHighlight>
                        )
                    }
                )}
            </View>

            <View style={Buttons.buttons}>
                {teclas4.map((element,index) => 
                    {
                        return (
                            <TouchableHighlight 
                                style={Buttons.button}
                                onPress={() => addNumero(element)}
                            >
                                <Text key={index} style={Buttons.detalhe}>{element}</Text>
                            </TouchableHighlight>
                        )
                    }
                )}
            </View>

            <View style={Buttons.buttons}>
                {teclas5.map((element,index) => 
                    {
                        return (
                            <TouchableHighlight 
                                style={Buttons.button}
                                onPress={() => addNumero(element)}
                            >
                                <Text key={index} style={Buttons.detalhe}>{element}</Text>
                            </TouchableHighlight>
                        )
                    }
                )}
            </View>
            
        </>
    )
    
}