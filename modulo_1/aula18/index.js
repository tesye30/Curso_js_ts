//function criaPessoa(nome, sobrenome, idade) {
//    return { nome,sobrenome,idade  };
//}

//const pessoa1 = criaPessoa('Lucas', 'Couto', 22);
//const pessoa2 = criaPessoa('Pedro', 'Miranda', 25);
//const pessoa3 = criaPessoa('Junior', 'Mattos', 21);


//console.log(pessoa1.nome, pessoa3.nome, pessoa2.nome);
 

const ser1 = {
    nome : 'Lucas',
    sobrenome : 'Couto',
    idade : 22,

    fala() {
      console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade(){
        this.idade++;
    }
};
ser1.fala();
ser1.incrementaIdade();
ser1.fala();
ser1.incrementaIdade();
ser1.fala();
ser1.incrementaIdade();
