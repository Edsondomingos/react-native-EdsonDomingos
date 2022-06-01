import React from 'react'
import {Text} from 'react-native'
import StyleMenu from '../css/styles/StyleMenu'

export default function Menu(props){

    return (
        <>
            <Text style={StyleMenu.menu}>{props.titulo}</Text>
        </>
    )
}