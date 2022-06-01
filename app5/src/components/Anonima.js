import React from 'react'
import {View, Text} from 'react-native'

export default function(props){
    // return <Text>Cabeçalho</Text>
    // <Fragment></Fragment> // ou <></>

    return (
        <>
            <Text>{props.titulo}</Text>           
        </>
    )
}