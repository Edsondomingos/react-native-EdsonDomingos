import * as React from 'react';
import {useState} from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'
import Display from '../styles/Display'
import Buttons from '../styles/Buttons'

const novaLista = []
let valor1 = []   
let operador = []
let res
let j = 0
let n

export default function Calculadora(){  
    
    const teclas1 = ['C','+']
    const teclas2 = [7,8,9,'-']
    const teclas3 = [4,5,6,'/']
    const teclas4 = [1,2,3,'*']
    const teclas5 = ['x',0,'.','=']

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [operacao, setOperacao] = useState(0)
    const [numeros, setNumeros] = useState('')
    const [result, setResult] = useState(0)

    function resultado(){
        let n = numeros+'+'
      while(n.length != 0){
          if(
              n[j] == '+' ||
              n[j] == '-' ||
              n[j] == '*' ||
              n[j] == '/' 
          ){
              operador.push(n[j])
              valor1.push(parseFloat(n))
              n = n.slice(j+1)
              j = 0
          }
          
          j++
      }
      n = ''

      // Organizar precedencia aqui
      for(let l=0;l<valor1.length-1;l++){
          if(operador[l] == '+'){
              res = valor1[l] + valor1[l+1]
              valor1[l+1] = res
          }else if(operador[l] == '-'){
              res = valor1[l] - valor1[l+1]
              valor1[l+1] = res
          }else if(operador[l] == '/'){
              res = valor1[l] / valor1[l+1]
              valor1[l+1] = res
          }else if(operador[l] == '*'){
              res = valor1[l] * valor1[l+1]
              valor1[l+1] = res
          }
      }
      setNumeros(res)
      res = ''
      operador = []
      valor1 = []
      j = 0
    }
    
    function addNumero(element) {
      // Não colocar caracteres especifios
        if(
            element != '=' &&
            element != 'C' &&
            element != '%'
            ){
               
              setNumeros(`${numeros + element}`)      
        }
        // Não colocar operador no inicio
        if(
          numeros.length == 0 && element == '+' ||
          numeros.length == 0 && element == '-' || 
          numeros.length == 0 && element == '/' ||
          numeros.length == 0 && element == '*'
          ){
            setNumeros('')
        }
        // Não colocar mais de um operador junto
        // if(
        //   // numeros[numeros.length-1].indexOf('+' || '*' || '/' || '-') != -1
        //   numeros[numeros.length-1].includes('/') ||
        //   numeros[numeros.length-1].includes('-') ||
        //   numeros[numeros.length-1].includes('*') ||
        //   numeros[numeros.length-1].includes('+')
        //   // element == numeros[numeros.length-1] && element == '+' ||
        //   // element == numeros[numeros.length-1] && element == '-' ||
        //   // element == numeros[numeros.length-1] && element == '/' ||
        //   // element == numeros[numeros.length-1] && element == '*'
        //   ){
        //     numeros[numeros.length-1] = element
        //     setNumeros(numeros)
        // }
        if(element == '='){
          let ordena = numeros
          if(ordena.indexOf('*')){
            //
          }
          resultado()
        }
    }

    function apagar(){
      setNumeros(numeros.slice(0,numeros.length-1))
    }
    
    return (
        <>
            <View style={Display.display}>
                <Text style={Display.digitos}>{numeros}</Text>
            </View>
            <View style={Buttons.buttons}>
                {teclas1.map((element,index) => 
                                
                  {

                    if(element == 'C'){
                      return (
                          <TouchableHighlight 
                              
                              style={Buttons.buttonM}
                              onPress={() => setNumeros('')}
                          >
                              <Text key={index} style={Buttons.detalhe}>{element}</Text>
                          </TouchableHighlight>
                      )
                    }

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
                {teclas2.map((element,index) => 
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
                      if(element == 'x'){
                      return (
                          <TouchableHighlight 
                              
                              style={Buttons.button}
                              onPress={apagar}
                          >
                              <Text key={index} style={Buttons.detalhe}>
                              {element}</Text>
                              
                          </TouchableHighlight>
                      )
                    }
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