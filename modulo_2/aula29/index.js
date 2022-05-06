function getDiaSemanaTexto (diaSemana) {
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
        break;  
        case 3:
           diaSemanaTexto = 'Quarda';
        break;  
        case 4:
           diaSemanaTexto = 'Quinta';
        break;  
        case 5:
           diaSemanaTexto = 'Sexta';
        break;  
        case 6:
           diaSemanaTexto = 'Sabado';
        break;
        default:
            diaSemanaTexto = '';   
    }

    return diaSemanaTexto
}


const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);




/*     if(diaSemanaTexto === 0) {
        diaSemanaTexto = 'Domingo';
    } if(diaSemana === 1) {
        diaSemanaTexto = 'Segunda';
    } if(diaSemana === 2) {
        diaSemanaTexto = 'Terça';
    }if(diaSemana === 3) {
        diaSemanaTexto = 'Quarda';
    }if(diaSemana === 4) {
        diaSemanaTexto = 'Quinta';
    }if(diaSemana === 5) {
        diaSemanaTexto = 'Sexta';
    } else if (diaSemana === 6) {
        diaSemanaTexto = 'Sabado';
    } else {
        diaSemanaTexto = '';
    }

 */
console.log(diaSemana, diaSemanaTexto);