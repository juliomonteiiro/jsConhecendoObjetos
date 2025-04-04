const carro = {
    marca: 'Honda',
    modelo:'Civic SI',
    ano: 2009,
    cor: 'preto',
    ligado: false,
    
};

const carroNovo = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
};

const carroComNovosDetalhes = {...carro, ...carroNovo};

console.log("Carro com Novos Detalhes:");
console.log(carroComNovosDetalhes);

carroComNovosDetalhes.modelo = "Yaris";

console.log("\nCarro com Novos Detalhes após alteração:");
console.log(carroComNovosDetalhes);