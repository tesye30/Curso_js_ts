
const verdadeira = true;

//Let te, escopo de bloco {... bloco }
// Var só tem escopo de função

let nome = 'Luiz';
var nome2 = "Luiz";


if (verdadeira){
    var nome2 = "Carlos";
    let nome = 'Otavio';
    
    
    if (verdadeira){
        var nome2 = "Pedro";
        let nome = 'teste testse';
        
    }
}

console.log(nome, nome2);
