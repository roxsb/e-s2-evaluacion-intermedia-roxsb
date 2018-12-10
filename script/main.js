'use strict';

//declarar las variables

const button = document.querySelector 
('.btn');
const numberX = document.querySelector 
('.number-x');
const counter = document.querySelector('.counter-strike');
const clue = document.querySelector('.clue');
let tried = 0;
// const resetCounter;

// const min = 1;
// const max = 100;
// const random = Math.ceil(Math.random() * max - min +1);
// const name = prompt('Hola, ¿cómo te llamas?');
// let number;


//generar el número aleatorio y pintarlo en la consola

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const r = getRandomNumber(100);
console.log('El número aleatorio es ' + r);
    
      
 //poner el contador a 0

//  resetCounter(); 
 counter.innerHTML = tried;    


 //hacer click

 function handleClick(){
     console.log('click');
 } 
 
 
 //recoger el numero

 const userN = parseInt(numberX.value);
    console.log('>',r,userN);


 //comparar con el número aleatorio generado

 
if (userN === r){
    clue.innerHTML = '¡¡Lo has acertado, no olvides comprar lotería de navidad!!';
//si es igual gana
} else if (userN > r){
    clue.innerHTML = 'Upss, te has pasado tronca';
    //si es mayor que el aleatorio, se avisa 
}else {
    clue.innerHTML = 'te has quedado corta chati';
    //si es menor que el aleatorio
}

//aumentar el contador y pintarlo
tried = tried+3;

// counter.innerHTML = tried;


//cuando se hace click
button.addEventListener('click',handleClick);





// if(number >= min && number >= max){
//         if(number < random){
//             alert('te has quedado corta chati');
//         }else if(number > random){
//             alert('Upss, te has pasado tronca');
//         }else if(number === random){
//             break;
//         }
//     }else{
//         alert('¿dónde vaaas? Recuerda que debes poner un número entre el '+min+' y'+max);

//     }


//     // for(tried;tried < 20; tried++){
// //     number = parseInt(prompt(nombre+' ,ingresa un número entre el '+min+' y el '+max));
// // }






















