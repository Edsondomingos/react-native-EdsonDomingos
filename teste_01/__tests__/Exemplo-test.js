function soma(num, num2){
    return num + num2
}

function subtracao(num, num2){
    return num - num2
}

function divisao(num, num2){
    return num / num2
}

function multiplicacao(num, num2){
    return num * num2
}

// AGRUPAMENTO DE TESTES
describe('Testes da função soma', () => {
    //it - como se fosse teste unitário
    it('Soma com Positivos', () => {
        expect(soma(5,3)).toBe(8)
    })
    it('Soma com Negativos', () => {
        expect(soma(-5,-3)).toBe(-8)
    })
})

describe('Testes da função subtracao', () => {
    it('Subtração de Positivos', () => {
        expect(subtracao(10,2)).toBe(8)
    })
    it('Subtração de Negativos', () => {
        expect(subtracao(-10,-2)).toBe(-8)
    })
})

describe('Testes da função Divisao', () => {
    it('Divisao de Positivos', () => {
        expect(divisao(100,2)).toBe(50)
    })
    it('Divisao de Negativos', () => {
        expect(divisao(-10,-2)).toBe(5)
    })
})

describe('Testes da função Multiplicacao', () => {
    it('Multiplicacao de Positivos', () => {
        expect(multiplicacao(10,5)).toBe(50)
    })
    it('Multiplicacao de Negativos', () => {
        expect(multiplicacao(-10,-5)).toBe(50)
    })
})

// função do react native que aciona o jest instalado
// TESTE ISOLADO
// test('Soma com Positivos', () => {
//     expect(soma(5,3)).toBe(8)
// })

// test('Soma com Negativos', () => {
//     expect(soma(-5,-3)).toBe(-8)
// })