const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsita: true,
    telefone: ['55119999999998', '55119999999993'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false;
    }
};

console.log(estudante.estaAprovado(7));