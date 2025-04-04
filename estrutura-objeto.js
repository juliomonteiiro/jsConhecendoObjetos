const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
};

console.log(estudante.nome);
console.log(`O nome de estudante é ${estudante.nome}`);
console.log(`os três primeiros dígitos do CPF são ${estudante.cpf.substring(0, 3)}`);