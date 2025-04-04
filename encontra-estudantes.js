const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor) {
  return lista.find((estudante) => estudante[chave].includes(valor));  
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Husein');

console.log('Informações do Estudante Encontrado:');
console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '1198123183');
console.log('Telefone do Estudante Encontrado:');
console.log(telefoneEstudante);