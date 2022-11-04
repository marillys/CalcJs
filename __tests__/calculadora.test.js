const calculadora = require("../src/calculadora")

test('somar 2 + 3' , () => {
    const numeroA = 2;
    const numeroB = 3;
    const resultadoEsperado = 5;

    const somarDoisNumeros = calculadora.somarDoisNumeros;
    const resultadoObtido = somarDoisNumeros(numeroA, numeroB);

    expect(resultadoObtido).toBe(resultadoEsperado)
})

test('subtrair 50 - 10', () => {
    const num1 = 50;
    const num2 = 10;
    const resultadoEsperado = 40;

    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros
    const resultadoObtido = subtrairDoisNumeros(num1,num2);

    expect(resultadoObtido).toBe(resultadoEsperado)
});

test('Multiplicar 6 * 3', () => {
    const num1 = 6;
    const num2 = 3;
    const resultadoEsperado = 18;

    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros
    
    expect(multiplicarDoisNumeros(num1,num2)).toBe(resultadoEsperado)
});

test('Dividir 8 / 4', () => {
    const num1=8;
    const num2 = 4;
    const resultadoEsperado = 2 
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    expect(dividirDoisNumeros(num1,num2)).toBe(resultadoEsperado)
});

//Teste de exceção
test('Dividir por zero', () => {
    const num1 = 7;
    const num2 = 0;
    const resultadoEsperado = Infinity;
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;

    expect(dividirDoisNumeros(num1,num2)).toBe(resultadoEsperado);
});

//Data Driven Test para a função dividirDoisNumeros
const massaDivisao = [
    [8,4,2],
    [7,0,Infinity]
]

//Script que usa a massa de teste
test.each(massaDivisao)('Dividir %f / %f', (num1, num2, resultadoEsperado) => {
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    expect(dividirDoisNumeros(num1,num2)).toBe(resultadoEsperado);
})