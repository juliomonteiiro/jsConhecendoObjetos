const contaBancaria = {
    titular: 'Julio',
    saldo: 1000,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar : function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    },
};

const cliente = {
    nome: 'Julio',
    conta: contaBancaria,
};

function mostrarSaldo(cliente) {
    console.log(`Nome do cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: ${cliente.conta.saldo}`);
}

cliente.conta.depositar(500);
cliente.conta.sacar(200);

mostrarSaldo(cliente)