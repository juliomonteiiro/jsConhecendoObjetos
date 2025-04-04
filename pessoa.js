const pessoa = {    
    nome: 'Julio',
    notas: [7, 8, 9, 10],

    calcularMediaNotas: function() {
        let total = 0;
        for (let nota of this.notas) {
            total += nota;
        }
        return total / this.notas.length;
    },

    classificarDesempenho: function() {
        const media = this.calcularMediaNotas();
        if (media >= 9) {
            return 'Desempenho excelente';
        } else if (media >= 7.5) {
            return 'Bom desempenho';
        } else if (media >= 6) {
            return 'Desempenho regular';
        } else {
            return 'Desempenho insuficiente';
        }
    }
};

const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`);


const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.`);