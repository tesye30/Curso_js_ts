const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const texto2 = document.getElementById('texto');
const texto3 = document.getElementById('texto');
const texto4 = document.getElementById('texto');
const texto5 = document.getElementById('texto');
const texto6= document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}<br/></p>`;
texto2.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}<br /></p>`;
texto3.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}<br /></p>`;
texto4.innerHTML += `<p>Arredondado para baixo: ${Math.min(numero)} <br /></p>`;
texto5.innerHTML += `Arredondado para cima: ${Math.max(numero)} <br /></p>`;
texto6.innerHTML += `Com duas casas decimais: ${Number(numero).toFixed(2)}<br />`;


//document.body.innerHTML = `<H1> Seu número é ${numb1} </H1><br />`;
//document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(numb1)}<br />`;
//document.body.innerHTML += ` ${numb1} é inteiro: ${Number.isInteger(numb1)}<br />`;
//document.body.innerHTML += `É NaN: ${Number.isNaN(numb1)}<br />`;
//document.body.innerHTML += `Arredondado para baixo: ${Math.min(numb1)} <br />`;
//document.body.innerHTML += `Arredondado para cima: ${Math.max(numb1)} <br />`;
//document.body.innerHTML += `Com duas casas decimais: ${Number(numb1).toFixed(2)}<br />`;



