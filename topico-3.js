const faturamentoDiario = [
    {"dia": 1, "valor": 22174.1664},
    {"dia": 2, "valor": 24537.6698},
    {"dia": 3, "valor": 5000},
    {"dia": 4, "valor": 6000},
    {"dia": 5, "valor": 6799},
];

let valores = faturamentoDiario.map(item => item.valor).filter(valor => valor > 0);
let menor = Math.min(...valores);
let maior = Math.max(...valores);
let media = valores.reduce((a, b) => a + b, 0) / valores.length;
let diasAcimaDaMedia = valores.filter(valor => valor > media).length;

console.log(`Menor valor de faturamento: ${menor}`);
console.log(`Maior valor de faturamento: ${maior}`);
console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);