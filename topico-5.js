function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

let stringOriginal = "Hello, World!";
let stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida);