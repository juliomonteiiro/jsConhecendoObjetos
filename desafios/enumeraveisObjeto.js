const carro = {
    marca: 'Honda',
    modelo:'Civic SI',
    ano: 2009,
    cor: 'preto',
    ligado: false,
    placa: 'ABC1234',
};

Object.defineProperty(carro, "placa", { enumerable: false });

console.log("Propriedades Enumeráveis do Carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

const chavesEnumeraveis = Object.keys(carro);
console.log("\nChaves Enumeráveis do Carro:");
console.log(chavesEnumeraveis);

console.log("\nAcesso direto à propriedade placa:");
console.log(carro.placa); 