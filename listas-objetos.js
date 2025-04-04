const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsita: true,
    telefone: ['55119999999998', '55119999999993'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: 45,
        complemento: 'apto 43',
    }],
};

estudante.enderecos.push({
    rua: 'Rua Dona Clotilde',
    numero: 71,
    complemento: '',
});

console.log(estudante.enderecos);
console.log(estudante.enderecos[0]);

const listaEnderecosComplemento = estudante.enderecos.filter((endereco) => endereco.complemento);
console.log(listaEnderecosComplemento);