import {Text, Button} from 'react-native'

export default props => {

    // let nome = ''

    // if(props.route.params === undefined){
    //     nome = props.route.params.nome
    // }
    // if(num1 > 5 || num2 =3.0){} //Não vai olhar pro num2 se o num1 for verdadeiro
    const nome = props.route.params==undefined ? '' : props.route.params.nome
    // const telRecebido = props.route.params==undefined ? '' : props.route.params.telefone

    return (
        <>
            <Text>Tela de Contato de {nome}</Text>
            <Button 
                title='Voltar para Index' 
                onPress={
                    () => {
                        props.navigation.navigate("Index")
                    }
                }
            />
            <Button 
                title='Voltar para Sobre' 
                onPress={
                    () => {
                        props.navigation.navigate("Sobre")
                    }
                }
            />
        </>
    )
}