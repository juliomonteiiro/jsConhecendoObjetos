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

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes('endereco')) {
    console.error('Erro. É necessário ter um endereço cadastrado');
}