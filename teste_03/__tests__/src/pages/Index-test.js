import { render, fireEvent } from "@testing-library/react-native";
import App from '../../../App';
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Teste de inicialização e Exibição", () => {
    it("Component de Index", () => {
        const { getByText, getByTestId} = render(<App />);
        // expect(getByText("Tela inicial")).toBeDefined();
        expect(getByText("Tela inicial")).toBeTruthy();
        expect(getByTestId("btnIndex")).toBeTruthy();
    })
})

describe("Teste de Navegação", () => {
    it("Navegação de Index para Dobro", () => {
        const { getByText, getByTestId} = render(<App />);
    
        const botao = getByTestId("btnIndex")
        fireEvent.press(botao)

        expect(getByText('Tela Dobro')).toBeTruthy()
    })
})