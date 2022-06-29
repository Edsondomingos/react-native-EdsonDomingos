import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import App from '../App'

// Biblioteca do jest
describe('Teste de snapshot', () => {
    it('Snapshot tela App', () => {
        const tela = renderer.create(<App />).toJSON()
        expect(tela).toMatchSnapshot()
    })
    
})

//Biblioteca de @testing-library/react-native
describe('Teste de componentes', () => {
    it('Teste de componente da tela App', () => {
        const {getByText, getByTestId} = render(<App />)

        const titulo = getByText('Calculo do Dobro')
        const entrada = getByTestId('entrada')
        // expect(titulo).toBeDefined()
        expect(titulo).toBeTruthy()//Redundancia, a menos que teste um booleano
        expect(getByTestId('entrada')).toBeDefined()
        expect(getByTestId('btnCalcular')).toBeDefined()
    })
    
})

describe('Testando operações', () => {
    it('Teste de Dobro Positivo', () => {
        const {getByText, getByTestId, getAllByText} = render(<App />)

        // fireEvent - aciona eventos na tela 
        const campoEntrada = getByTestId('entrada')
        fireEvent.changeText(campoEntrada, 15)

        const botao = getByTestId('btnCalcular')
        fireEvent.press(botao)

        expect(getByText('30')).toBeTruthy()
        expect(getAllByText("30").length).toBe(1) // Esse ultimo 1 é a quantidade de itens existentes
        // expect(getAllByText("30")[1].length).toBe(2)
    })
})
