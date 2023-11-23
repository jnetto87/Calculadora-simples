const input1 = document.querySelector("#input1");
const seletor = document.querySelector("#seletor");
const input2 = document.querySelector("#input2");
const calcular = document.querySelector("#calcular");
const resultadoElement = document.querySelector(".resultado");

calcular.addEventListener("click", function () {
    let valorInput1 = parseFloat(input1.value);
    let valorInput2 = parseFloat(input2.value);
    let operacao = seletor.value;

    let resultado = 0;

    switch (operacao) {
        case "+":
            resultado = valorInput1 + valorInput2;
            break;
        case "-":
            resultado = valorInput1 - valorInput2;
            break;
        case "*":
            resultado = valorInput1 * valorInput2;
            break;
        case "/":
            resultado = valorInput1 / valorInput2;
            break;
        default:
            resultado = "Operação inválida";
    }

    if (typeof resultado === 'number') {
        resultadoElement.textContent = "O resultado é = " + resultado.toString();
    } else {
        resultadoElement.textContent = resultado;
    }
});
