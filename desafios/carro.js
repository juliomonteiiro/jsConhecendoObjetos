const carro = {
    marca: 'Honda',
    modelo:'Civic SI',
    ano: 2009,
    cor: 'preto',
};

for (let propriedade in carro) {
    console.log(propriedade + ': ' + carro[propriedade]);
}
