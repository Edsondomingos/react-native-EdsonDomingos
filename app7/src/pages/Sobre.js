import {Text, Button} from 'react-native'

export default props => {
    return (
        <>
            <Text>Tela Sobre</Text>
            <Button 
                title='Ir para Index'
                onPress={() => {
                    props.navigation.navigate('Index')
                }}
            />
            <Button 
                title='Ir para Contato'
                onPress={() => {
                    props.navigation.navigate('Contato')
                }}
            />
            <Button 
                title='<='
                onPress={() => {
                    props.navigation.goBack() //Volta para a ultima tela
                }}
            />  
        </>
    )
}