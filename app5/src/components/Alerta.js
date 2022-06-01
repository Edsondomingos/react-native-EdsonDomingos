import { Text, Button } from 'react-native'
import {useState} from 'react'

// function ativou(){
//     alert('Clicou')
// }

// export default () => (
//     <>
//         <Text >{}</Text>
//         <Button title="click" onPress={ativou}/>
//     </>
// )

// export default function() {
//     function ativou(){
//         alert('Clicou')
//     }
//     //onPress - recebe a referencia da função. com parenteses na função, já executa
//     return (
//         <>
//             <Text >{}</Text>
//             <Button title="click" onPress={ativou}/>
//         </>
//     )
// }

export default () => { 
    // let numero = 0
    // let numeroLista = useState(0) //Valor inicial (0)
    // let numero = numeroLista[0] //Primeira posicão - traz o estado atual. Neste caso "0"
    // let alterarNumero = numeroLista[1] //Segunda posição - uma função que altera o estado

    //Destructor
    // const [numero,alterarNumero] = useState(0)
    //Convensão
    const [numero,setNumero] = useState(0)

    function ativou(){
        // alert('Clicou')
        //Numero aleatorio entre 1 e 10
        // alert(Math.floor(Math.random() * 10 + 1))
        // alert(parseInt(Math.random() * 10 + 1))
        setNumero(parseInt(Math.random() * 10 + 1))

    }
    return (
        <>
            <Text >{numero}</Text>
            <Button title="click" onPress={ativou}/>
        </>
    )
}