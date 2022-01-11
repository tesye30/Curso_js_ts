//exercicos

const nome = 'Lucas';
const sobrenome = 'Couto';
const idade = 22;
const peso = 64;
const altura = 1.80;

let imc; // peso / (altura * altura)

imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2022 - idade;


//console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso ,'kg tem', altura, 'de altura e seu IMC é de', imc, nome, 'nasceu em', anoNascimento);
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc} ${nome} nasceu em ${anoNascimento}.`);

