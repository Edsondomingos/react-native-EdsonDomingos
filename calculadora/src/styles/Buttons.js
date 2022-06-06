import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    buttons: {
        // display: 'flex',
        flex: 1,
        flexDirection: 'row-reverse',
    },
    display: {
        flex: 2
    },
    button: {
        flex: 1,
        backgroundColor: '#000',
        // alignContent: 'center',
        textAlign: 'center',
        color: '#fff',
        // borderEndColor: 'solid white',
        // borderStyle: 'solid',
        // borderColor: '#fff',
        fontWeight: 'bolder',
        fontSize: 20
    },
})