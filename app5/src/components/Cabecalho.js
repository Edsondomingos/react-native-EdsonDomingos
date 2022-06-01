import React from 'react'
import {Text} from 'react-native'
import styleCabecalho from '../css/styles/styleCabecalho'

export default function Cabecalho(props){
    // return <Text>Cabeçalho</Text>
    // <Fragment></Fragment> // ou <></>

    return (
        <>
            <Text style={styleCabecalho.cabecalho}>{props.titulo}</Text>
            <Text style={styleCabecalho.cabecalho}>{props.subtitulo}</Text>            
        </>
    )
}