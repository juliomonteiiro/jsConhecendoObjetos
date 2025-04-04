const estudantes = require('./estudantes.json');

function filtraPorPropriedade(lista, propriedade){
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
        });
}

const listaEndercosIncompletos = filtraPorPropriedade(estudantes, 'cep');
console.log('Estudantes com endereços incompletos:');
console.log(listaEndercosIncompletos);