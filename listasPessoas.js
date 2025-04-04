const listasPessoas = [
    { nome: 'Julio', idade: 19, cidade: 'Hortolândia' },
    { nome: 'João', idade: 25, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
];

function mostrarListaPessoas(pessoas) {
    console.log("Lista de Pessoas:");
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
}

function filtrarPessoasPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

mostrarListaPessoas(listasPessoas);

listaPessoas.push({ nome: "Ana", idade: 28, cidade: "Salvador" });

mostrarListaPessoas(listasPessoas);

const pessoasSalvador = filtrarPorCidade(listaPessoas, "Salvador");
console.log("Pessoas em Salvador:");
console.log(pessoasSalvador);