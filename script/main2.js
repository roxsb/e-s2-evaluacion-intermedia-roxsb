'use strict';

// devolver un número aleatorio entre min (incluido) y max (excluido)
const numberRandom = parseInt(Math.random() * (100 - 1) + 1);
console.log(numberRandom);

//dar valor al paso inicial
let steps = 0;

const button = document.querySelector('.btn')[0];
button.addEventListener('click',function(event){
    //obtener el número introducido por la usuaria
    const userN = parseInt(document.querySelector('.name-x')[0].value);
    const counter = document.querySelector('.counter-strike');
    const textClue = document.querySelector('.clue');
    //muestra las comprobaciones
    if( userN > numberRandom ){
      let result = 'Upss, te has pasado tronca';
      steps++;//añade uno a la variable
      counter.innerHTML = steps; //pinta el valor de steps
      textclue.innerHTML = result; //muestra el texto resultado de la comprobación
      }else if( userN < numberRandom ){
        let result = 'te has quedado corta chati';
      steps++;//añadimos uno a la variable
      counter.innerHTML = steps;//pinta el valor de steps
      textClue.innerHTML = result; //muestra el texto resultado de la comprobación
    }
    else{
        const result = '¡¡Lo has acertado, no olvides comprar lotería de navidad!!';
        document.querySelector('.form-container')[0].remove(); //elimina la caja de comprobaciones, esto es opcional.
        textclue.innerHTML = result; //muestra el texto resultado de la comprobación
  }
});


   