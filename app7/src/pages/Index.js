import { View, Text, Button, TouchableHighlight } from 'react-native'

export default props => {
    
    return (
        <>
            <Text>Tela inicial</Text>
            <Button 
                title='Ir para Contato' 
                onPress={
                    () => {
                        props.navigation.navigate("Contato", {nome: 'Edson Domingos'})
                    }
                }
            />
            <Button 
                title='Ir para Sobre' 
                onPress={
                    () => {
                        props.navigation.navigate("Sobre")
                    }
                }
            />
            <TouchableHighlight onPress={() => props.navigation.navigate('Sobre')}>
                <View style={{backgroundColor: 'aqua', height: 100, textAlign: 'center'}}>
                    <Text>ir para Sobre</Text>
                </View>
            </TouchableHighlight>
        </> 
    )
}