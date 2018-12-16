'use strict';




// 1 Save a reference to DOM elements in variables (NO)
// 2 Generate the random number and save it to a variable(OK)
// 3 Init counter of trials to 0(OK)
// 4 Define a function that executes when the user clicks on the button, that
// increments the counter and paints its value in the HTML(NO)
// collect the value of the HTML input and compare it with the random number(NO)
// if they are equal, draw a 'You Win' message
// if it's lower, draw a 'Too short' message
// if it's higher, draw a 'Too long' message
// 5 Assign a listener to the button click to execute the previous function

//declarar las variables
 let r = getRandomNumber(100);
 const button = document.querySelector('.btn');
 const numberU = document.querySelector('.number-x');
 const clueX = document.querySelector('.clue');
 let c = 0;
 const counter = document.querySelector('.counter-strike');
//generar el número aleatorio y pintarlo en la consola

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
counter.innerHTML = c;
console.log(r);

function game(){
    const x = parseInt(numberU.value);   
    console.log(x); 
    if(x === r){
        clueX.innerHTML ='Has ganado!!!!';
        c = 0;
        counter.innerHTML = c;
        r = getRandomNumber(100);
        console.log(r);
    }else if(x > r){
       clueX.innerHTML = 'te has pasado';
       c = c+1;
       counter.innerHTML = c;
    }else {
        clueX.innerHTML = 'te has quedado corta';
        c = c+1;
        counter.innerHTML = c;
    }
    numberU.value = undefined;
}


//llamo al botón

button.addEventListener('click', game);