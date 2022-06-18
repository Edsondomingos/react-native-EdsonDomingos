import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    buttons: {
        // display: 'flex',
        flex: 2,
        // flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor:'blue'
    },
    button: {
        flex: 1,
    },
    detalhe: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#aaa',
        padding: 1,
        margin: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#fff'
    }
})