const form = document.querySelector('h1');

form.addEventListener('h1', function (e) {
    e.preventDefault();
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
        return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
    }

    let mesTexto;
    switch (mesTexto){
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

    const data = new Date();
    const dia = data.getDate();
    const hora = data.getHours();
    const min = data.getMinutes();
    const ano = data.getFullYear();


    const msg = `${diaSemanaTexto},${dia} de ${mesTexto} de ${ano} ${hora}:${min} `;
    msg.appendChild();
});

