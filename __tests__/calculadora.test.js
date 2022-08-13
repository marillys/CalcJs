const calculadora = require("../src/calculadora")

test('somar 2 + 3' , () => {
    const numeroA = 2;
    const numeroB = 3;
    const resultadoEsperado = 5;

    const somarDoisNumeros = calculadora.somarDoisNumeros;
    const resultadoObtido = somarDoisNumeros(numeroA, numeroB);

    expect(resultadoObtido).toBe(resultadoEsperado)
})