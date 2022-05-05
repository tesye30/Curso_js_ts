/* const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); */
//const data = new Date(2019, 3, 20, 15, 14, 27); // Ano, mes, dia , horas, minuto, segudos e mileseguindo
/* const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('mês', data.getMonth() + 1); // mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now()); */

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
   const dia = zeroAEsquerda( data.getDate());
   const mes = zeroAEsquerda(data.getMonth() + 1);
   const ano = zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours());
   const min = zeroAEsquerda(data.getMinutes());
   const seg = zeroAEsquerda(data.getSeconds());

   return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date ();
const dataBrasil = formataData(data);
console.log(dataBrasil);