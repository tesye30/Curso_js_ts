const h1 = document.querySelector('.container h1');
const data = new Date ();

function getNomeSe(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
        return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
        return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
        return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
        return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
        return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
        return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
    }

}
function getNomeMes(numMes) {
   const meses = ['janeiro', 'feveireiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
   return meses[numMes];
}

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {

    const numMes = data.getMonth();
    const diaSemana = data.getDay();

    const nomeMes = getNomeMes(numMes);
    const diaSema = getNomeSe(diaSemana);


    return  (`${diaSema},${data.getDate()} de ${nomeMes}
    de ${data.getFullYear()} às ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())} `
    );
}

h1.innerHTML = criaData(data);


//////////////////////////////////////////////////////////
//  const h1 = document.querySelector('.container h1');
//  const data = new Date ();
//  const opcoes = {
//      dateStyle: 'full',
//      timeStyle: 'short'
//  };

//  h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle:'short'});
 ////////////////////////////////////////////////////////