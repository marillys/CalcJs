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
})