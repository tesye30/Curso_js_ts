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
    let mesTexto;
    switch (numMes){
        case 0:
            mesTexto = 'Janeiro';
        return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
        return mesTexto;
        case 2:
            mesTexto = 'Março';
        return mesTexto;
        case 3:
            mesTexto = 'Abril';
        return mesTexto;
        case 4:
            mesTexto = 'Maio';
        return mesTexto;
        case 5:
            mesTexto = 'Junho';
        return mesTexto;
        case 6:
            mesTexto = 'Julho';
        return mesTexto;
        case 7:
            mesTexto = 'Agosto';
        return mesTexto;
        case 8:
            mesTexto = 'Setembro';
        return mesTexto;
        case 9:
            mesTexto = 'Outubro';
        return mesTexto;
        case 10:
            mesTexto = 'Novembro';
        return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
        return mesTexto;
        default:
            mesTexto = '';
    }
}

function criaData(data) {
   
    const numMes = data.getMonth();
    const diaSemana = data.getDay();

    const nomeMes = getNomeMes(numMes);
    const diaSema = getNomeSe(diaSemana);


    return  (`${diaSema},${data.getDate()} de ${nomeMes} 
    de ${data.getFullYear()} às ${data.getHours()}:${data.getMinutes()} `
    );
}

h1.innerHTML = criaData(data);

