// String = Text (dentro de aspas é string) | Number = Número (fora de aspas é number)
// Não podemos criar constantes com palavras reservadas 
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase (Ex: nomeCompletoDoCliente)
// Case-sensitive (letra maiuscula e minuscula faz diferença)
// Não podemos modificar o valor de uma constantes 
// NÃO UTILIZE VAR, UTILIZE CONST.  
const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado *2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(typeof primeiroNumero);