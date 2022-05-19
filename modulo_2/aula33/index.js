const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Carlos',
    idade: '25',
    endereco: {
        rua: 'Av Jardim Goias',
        numero: 56
    }

};

// Atribuição via desestruturação
const { nome, ...resto } = pessoa;
console.log(nome, resto);