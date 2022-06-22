import renderer from "react-test-renderer" //Biblioteca que o jest usa
import App from '../App'
import {render}  from "@testing-library/react-native"

describe('Teste de Snapshot', () => {
    it('Criação de snapshot', () => {
        const inicial = renderer.create(<App />).toJSON()
        expect(inicial).toMatchSnapshot();
    })
})

describe('Teste de inicialização', () => {
    it('Verificando se componentes foram iniciados', () => {
        // const [getByText, getByTextId, getAllByText] = render(<App />)
        const {getByText, getByTestId, getAllByText} = render(<App />)

        const tituloApp = getByTestId('TextTitulo')
        expect(tituloApp).toBeDefined() // Verifica se foi inicializado e se esta la na tela

        expect(getByTestId('TextInputEntrada')).toBeDefined()

        const botao = getByText('Calcular')
        expect(botao).toBeDefined()
    })
})