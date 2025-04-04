const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsita: true,
    telefone: ['55119999999998', '55119999999993'],
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: 45,
        complemento: 'apto 43',
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: 71,
        complemento: null,
    }]
};

function exibirTelefones(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefone[0], estudante.telefone[1]);
exibirTelefones(...estudante.telefone);

// const dadosEnvio = {
//     destinatario: estudante.nome,
//     endereco: estudante.endereco[0],
// };

// const dadosEnvio = {
//     destinatario: estudante.nome,
//     rua: estudante.endereco[0].rua,
//     numero: estudante.endereco[0].numero,
// };

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.endereco[0],
}; 

console.log(dadosEnvio);